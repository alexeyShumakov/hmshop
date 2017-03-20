import React from 'react';
import {Link} from 'react-router';
import Order from './order';
export default (props) => {
  const orders = props.store.getIn(['orders', 'orders'])
  const {destroyOrder, fetchOrders} = props.actions;
  return(
    <div>
      <h2>Заказы</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Номер телефона</th>
            <th>Цена</th>
            <th>действия</th>
          </tr>
        </thead>
        <tbody>
          { !orders.isEmpty() && orders.map((order)=>{
            const key = order.get('id');
            let destroy = () => destroyOrder(key).then(() => fetchOrders());
            return <Order {...{key, order, destroy}} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}
