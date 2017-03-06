import React from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';
import {Link} from 'react-router';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
    _.bindAll(this, 'show', 'hide', 'outSideClick', 'resetState');
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
  }

  hide() {
    this.setState({isShow: false});
  }

  resetState() {
    this.hide();
    this.props.setRootCategoryId(0);

  }
  render() {
    return(
      <div className='info'>
        <i className="nav__icon fa fa-bars fa-lg" onClick={this.show}></i>
        <div className={this.state.isShow ? 'info__content_show' : 'info__content'} >
          <ul className='u-no-list-style info__list'>
            <li><Link to='/info/about' onClick={this.resetState}>О нас</Link></li>
            <li><Link to='/info/how_to_order' onClick={this.resetState}>Как заказать</Link></li>
            <li><Link to='/info/Delivery' onClick={this.resetState}>Доставка</Link></li>
            <li><Link to='/info/about' onClick={this.resetState}>Контакты</Link></li>
            <li><Link to='/info/terms' onClick={this.resetState}>Правила</Link></li>
            <li><a href="/">Блог</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
