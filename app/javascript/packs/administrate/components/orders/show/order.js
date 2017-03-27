import React from 'react';
import {Link, browserHistory} from 'react-router';
export default (props) => {
  const order = props.store.getIn(['orders', 'order']);
  const isLoading = props.store.getIn(['orders', 'isLoading']);

  const destroy = () => {
    props.actions.destroyOrder(order.get('id')).then(()=> {
      browserHistory.push('/administrate/orders');
    })
  }
  return(
    <div>
      { !isLoading &&
        <div>
          <div className='control-buttons float-right'>
            <div
              onClick={()=> props.actions.sendOrderConfirmation(order.get('id'))}
              className="button button-large">
              Отправить подтверждение
            </div>
            <Link
              to={`/administrate/orders/${order.get('id')}/edit`}
              className="button button-large">
              Редактировать
            </Link>
            <button
              onClick={destroy}
              className="button button-large button-outline">
              Удалить
            </button>
          </div>
          <h3>Заказ #{order.get('id')}</h3>
          <dl>
            <dt>Сумма покупки</dt>
            <dd>{order.get('total_price')} <i className="fa fa-rub"></i></dd>
            <dt>Цена доставки</dt>
            <dd>{order.get('delivery_price')} <i className="fa fa-rub"></i></dd>
            <dt>id</dt>
            <dd>{order.get('id')}</dd>
            <dt>Имя</dt>
            <dd>{order.get('name')}</dd>
            <dt>Номер телефона</dt>
            <dd>{order.get('phone')}</dd>
            <dt>Email</dt>
            <dd>{order.get('email')}</dd>
            <dt>Адрес</dt>
            <dd>{order.get('address')}</dd>
            <dt>Товары</dt>
            <dd>
              <table>
                <thead>
                <tr>
                  <th>Изобр.</th>
                  <th>Название</th>
                  <th>Кол-во</th>
                  <th>Цена</th>
                  <th>Сумма</th>
                </tr>
                </thead>
                <tbody>
                  {order.get('line_items').map((item)=> {
                    return(
                      <tr key={item.get('id')}>
                        <td><img src={item.getIn(['product', 'thumb_cover'])} alt=""/></td>
                        <td>{item.getIn(['product', 'title'])}</td>
                        <td>{item.get('count')}</td>
                        <td>{item.get('price')}</td>
                        <td>{item.get('total_price')}</td>
                      </tr>
                    )
                  })
                  }
                </tbody>
              </table>
            </dd>
          </dl>
        </div>
      }
    </div>
  )
}
