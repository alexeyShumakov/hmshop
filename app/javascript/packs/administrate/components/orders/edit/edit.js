import React from 'react';
import {Link, browserHistory} from 'react-router';

import Form from '../form';

export default (props) => {
  const order = props.store.getIn(['orders', 'order']);
  const errors = props.store.getIn(['orders', 'errors']);
  const {destroyOrder, updateOrder, setOrder } = props.actions;
  const title = 'Изменить';
  const destroy = () => {
    destroyOrder(order.get('id')).then(()=> {
      browserHistory.push('/administrate/orders');
    })
  }
  const action = (e)=> {e.preventDefault(); updateOrder(order)};
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
    </div>
  )
}
