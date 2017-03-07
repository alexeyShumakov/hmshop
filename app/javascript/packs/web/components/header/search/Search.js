import React from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';
import Immutable from 'immutable';
import {Link} from 'react-router';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
    _.bindAll(this, 'show', 'hide', 'outSideClick', 'search');
    this.dSearch = _.debounce(this.dSearch, 200);
  }

  componentWillMount(){
    document.addEventListener('click', this.outSideClick, false)
  }
  componentWillUnmount(){
    document.removeEventListener('click', this.outSideClick, false)
  }

  outSideClick(e) {
    if(!findDOMNode(this).contains(e.target)) {
      this.hide();
    }
  }
  show() {
    this.setState({isShow: true});
    this.form.focus();
  }

  hide() {
    let { setKeyword, setProducts } = this.props;
    this.setState({isShow: false});
    this.dSearch.cancel();
    setKeyword('');
    setProducts(Immutable.List([]));
  }

  search(e) {
    let keyword = e.target.value;
    let { setKeyword, search } = this.props;
    setKeyword(keyword);
    this.dSearch(search, keyword);
  }

  dSearch(search, keyword) {
    search(keyword);
  }

  render() {
    let { keyword, products, fetchProduct } = this.props;
    let {isShow} = this.state;
    let width = isShow ? '175px' : '0';
    return(
      <div className='search'>
        <i className={`nav__icon fa fa-search fa-lg ${isShow ? 'nav__icon_active' : ''}`}
           onClick={this.show}
        ></i>
        <div className={isShow ? 'search__form_show' : 'search__form'} style={{width}} >
        <input
          className='search__input'
          placeholder="Поиск"
          type="text"
          value={keyword}
          onChange={this.search}
          ref={(e)=> this.form = e}
        />

        <div className={products.isEmpty() ? 'search__content' : 'search__content_show'}>
          <ul className='u-no-list-style search__list'>
            { products.map((product)=> {
              let id = product.get('id');
                return(
                  <li key={id} >
                    <Link
                      onClick={()=>{this.hide(); fetchProduct(id);}}
                      to={`/products/${id}`} >
                      {product.get('title')}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        </div>
      </div>
    )
  }
}
