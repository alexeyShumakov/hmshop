import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import BasketButton from '../BasketButton';

export default class CartProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    _.bindAll(this, 'openPreview', 'show', 'hide', 'showMenu', 'hideMenu', 'hideImmediately');
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

  openPreview() {
    let { fetchProduct, openModal, product } = this.props;
    this.hideImmediately();
    openModal(true);
    fetchProduct(product.get('id'));
  }

  render() {
    let { product, createLineItem, fetchFullProduct } = this.props;
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
            onClick={this.openPreview} >
            <i className='fa fa-search float-right'></i>
          </div>
          <div className="cart__image">
            <Link to={`/products/${product.get('id')}`} onClick={() => fetchFullProduct(product.get('id'))}>
              <img className='lazyload' data-src={product.get('thumb_cover')} alt={product.get('title')}/>
            </Link>
          </div>
          <div className="cart__info">
            {product.get('title')}
            <p className="cart__price">
              <b>{product.get('price')}</b>
              <i className='fa fa-rub'></i>
            </p>

            <BasketButton
              create={createLineItem}
              productId={product.get('id')}
              klassName={`button ${hover ? 'cart__button_hover' : 'cart__button'}`}
            />
          </div>
        </div>
      </div>
    )
  }
}
