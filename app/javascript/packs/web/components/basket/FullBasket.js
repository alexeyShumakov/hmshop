import React from 'react';
import LineItem from './LineItem';
import OrderForm from './OrderForm';

export default (props) => {
  let {actions, cart, order } = props;
  let lineItems = cart.get('line_items');
  return(
    <div>
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
            order={order}
            setOrder={actions.setOrder}
            createOrder={actions.createOrder}
          />
        </div>
      </div>
    </div>
  )
}
