import React from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';

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
            <li><a href="/">О нас</a></li>
            <li><a href="/">Как заказать</a></li>
            <li><a href="/">Доставка</a></li>
            <li><a href="/">Контакты</a></li>
            <li><a href="/">Правила</a></li>
            <li><a href="/">Блог</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
