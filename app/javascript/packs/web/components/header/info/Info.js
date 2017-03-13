import React from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';
import {Link} from 'react-router';

export default class Info extends React.Component {
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
  }

  hide() {
    this.setState({isShow: false});
  }

  render() {
    return(
      <div className='info'>
        <i className="nav__icon fa fa-bars fa-lg" onClick={this.show}></i>
        <div className={this.state.isShow ? 'info__content_show' : 'info__content'} >
          <ul className='u-no-list-style info__list'>
            <li><Link to='/info/about' onClick={this.hide}>О нас</Link></li>
            <li><Link to='/info/how_to_order' onClick={this.hide}>Как заказать</Link></li>
            <li><Link to='/info/delivery' onClick={this.hide}>Доставка</Link></li>
            <li><Link to='/info/contacts' onClick={this.hide}>Контакты</Link></li>
            <li><Link to='/info/terms' onClick={this.hide}>Правила</Link></li>
            <li><Link to='/posts' onClick={()=> {this.hide(); this.props.fetchPosts()}}>Блог</Link></li>
          </ul>
          <ul className='u-no-list-style nav__social-list'>
            <li><i className='fa fa-vk'></i></li>
            <li><i className='fa fa-facebook'></i></li>
            <li><i className='fa fa-pinterest'></i></li>
            <li><i className='fa fa-instagram'></i></li>
          </ul>
        </div>
      </div>
    )
  }
}
