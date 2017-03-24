import React from 'react';
import {Link, browserHistory} from 'react-router';

import LineItem from './lineItem';
import Form from '../form';
import SearchProducts from '../../searchProducts';

export default (props) => {
  const {actions, store} = props;
  const order = store.getIn(['orders', 'order']);
  const errors = store.getIn(['orders', 'errors']);
  const searchProductsData = store.getIn(['products', 'search']);
  const {searchProducts, setSearchKeyword,
    estroyOrder, updateOrder, setOrder } = actions;
  const title = 'Изменить';
  const lineItems = order.get('line_items');
  const destroy = () => {
    destroyOrder(order.get('id')).then(()=> {
      browserHistory.push('/administrate/orders');
    })
  }
  const action = (e)=> {e.preventDefault(); updateOrder(order)};
  const addProduct = (product) => {
    let newProduct = {
      product_id: product.get('id'),
      order_id: order.get('id')
    }
    actions.createLineItem(newProduct);
  }
  return(
    <div>
      <div className='control-buttons float-right'>
        <Link
          to={`/administrate/orders/${order.get('id')}`}
          className="button button-large">
          Отмена
        </Link>
        <button
          onClick={destroy}
          className="button button-large button-outline">
          Удалить
        </button>
      </div>
      <h3>Редактировать заказ #{order.get('id')}</h3>
      <div className="clearfix"></div>
      <Form {...{order, setOrder, action, errors, title}}/>
      <h3>Продукты</h3>
      <SearchProducts
        search={searchProducts}
        setKeyword={setSearchKeyword}
        action={addProduct}
        keyword={searchProductsData.get('keyword')}
        products={searchProductsData.get('products')}
      />
      <div className="row">
        <div className='column'>
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
          <div className='order__footer'>
            <h4 className='order__total-price'>
              <div>
                <span>доставка:</span> <b>{order.get('delivery_price')}</b> <i className='fa fa-rub'></i>
              </div>
              <div>
                <span>продукты:</span> <b>{order.get('products_price')}</b> <i className='fa fa-rub'></i>
              </div>
              <div>
                <span>Итого: </span>
                <b>{order.get('total_price')}</b> <i className='fa fa-rub'></i>
              </div>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
