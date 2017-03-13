import React from 'react';
import Immutable from 'immutable';

import LineItem from './LineItem';
import OrderForm from './OrderForm';
import Breadcrumbs from '../Breadcrumbs';
import ProductModal from '../showcase/productModal/ProductModal'

const fakeNode = Immutable.fromJS({
  ancestors: [],
  title: 'Оформление заказа'
})

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
          <Breadcrumbs node={fakeNode}/>
        </div>
      </div>

      <div className="row">
        <div className='column'>
          <div className='full-basket'>
            <h3 className='u-page-title'>Ваша корзина</h3>
            <table>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Описание</th>
                  <th>Цена</th>
                  <th>Сумма</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody>
                { lineItems && lineItems.map((item, position)=>{
                  return(
                    <LineItem
                      openModal={actions.setModalProductState}
                      fetchProduct={actions.fetchProduct}
                      key={item.get('id')}
                      item={item}
                      destroy={actions.destroyLineItem}
                      update={actions.updateLineItem}
                      position={position + 1}
                    />
                  )
                  })
                }
              </tbody>
            </table>
            <div className='full-basket__footer'>
              <h4 className='full-basket__total-price'>
                <span>Итого: </span>
                <b>{cart.get('total_price')}</b> <i className='fa fa-rub'></i>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <OrderForm
            order={store.get('order')}
            setOrder={actions.setOrder}
            createOrder={actions.createOrder}
          />
        </div>
      </div>
    </div>
  )
}
