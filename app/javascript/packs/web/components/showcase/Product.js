import React from 'react';
import _ from 'lodash';

export default class CartProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    _.bindAll(this, 'show', 'hide', 'showMenu', 'hideMenu', 'hideImmediately');
    this.show = _.debounce(this.show, 200);
    this.hide = _.debounce(this.hide, 50);
  }

  show() {
    this.setState({hover: true});
  }

  hide() {
    this.setState({hover: false});
  }
  hideImmediately() {
    this.setState({hover: false});
  }

  showMenu() {
    this.hide.cancel();
    this.show();
  }

  hideMenu() {
    this.show.cancel();
    this.hide();
  }

  render() {
    let { product } = this.props;
    let { hover } = this.state;
    let opacity = hover ? 1 : 0;
    return(
      <div className="column column-25">
        <div
          className={`cart ${hover ? 'cart_hover' : ''}`}
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
        >
          <div
            className="cart__top-menu"
            style={{opacity}}
            onClick={()=>{this.hideImmediately(); this.props.openModal(true);}} >
            <i className='fa fa-search float-right'></i>
          </div>
          <div className="cart__image">
            <a href="#">
              <img src={product.get('thumb_cover')} alt=""/>
            </a>
          </div>
          <div className="cart__info">
            {product.get('title')}
            <p className="cart__price">
              <b>{product.get('price')}</b>
              <i className='fa fa-rub'></i>
            </p>
            <button className={`button ${hover ? 'cart__button_hover' : 'cart__button'}`}>Купить</button>
          </div>
        </div>
      </div>
    )
  }
}
