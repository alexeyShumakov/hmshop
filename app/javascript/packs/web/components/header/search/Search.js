import React from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
    _.bindAll(this, 'show', 'hide', 'outSideClick');
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
    this.setState({isShow: false});
  }

  render() {
    let {isShow} = this.state;
    let width = isShow ? '175px' : '0px';
    return(
      <div className='search'>
        <i className={`nav__icon fa fa-search fa-lg ${isShow ? 'nav__icon_active' : ''}`}
           onClick={this.show}
        ></i>
        <div
          className={isShow ? 'search__form_show' : 'search__form'}
          style={{width}}
        >
          <input
            className='search__input'
            placeholder="Поиск"
            type="text"
            ref={(e)=> this.form = e}
          />
        </div>
      </div>
    )
  }
}
