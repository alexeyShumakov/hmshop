import React from 'react';
import Immutable from 'immutable';

import ProductModal from '../showcase/productModal/ProductModal'
import EmptyBasket from './EmptyBasket';
import FullBasket from './FullBasket';

export default (props) => {
  let { store, actions } = props;
  let cart = store.getIn(['cart', 'cart']);
  let lineItems = cart.get('line_items');
  let modalProduct = store.get('modalProduct');
  return(
    <div className='container'>
      <ProductModal
        openModal={actions.setModalProductState}
        createLineItem={actions.createLineItem}
        setCurrentPicture={actions.setModalCurrentPicture}
        product={modalProduct.get('product')}
        products={store.get('products')}
        fetchProduct={actions.fetchProduct}
        fetchFullProduct={actions.fetchFullProduct}
        currentPicture={modalProduct.get('currentPicture')}
        isLoading={modalProduct.get('isLoading')}
        isOpen={modalProduct.get('isOpen')} />
      <div className="row">
        <div className="column">
          <div className='breadcrumbs'>
            <span>
              <a className='breadcrumbs__item' href="/">Главная</a>
              <i className='breadcrumbs__item fa fa-angle-right'></i>
            </span>
            <span>Оформление заказа</span>
          </div>
        </div>
      </div>

      { lineItems.isEmpty() ?
          <EmptyBasket
            isShow={store.getIn(['order','showNotification'])}
            show={actions.showOrderNotification}
          /> :
          <FullBasket
            actions={actions}
            cart={cart}
            order={store.get('order')}
          />
      }
    </div>
  )
}
