import React from 'react';
import {Link, browserHistory} from 'react-router';

export default (props) => {
  const shop = props.store.getIn(['shop', 'shop']);
  let isLoading = props.store.getIn(['shop', 'isLoading']);

  return(
    <div>
      <div className='control-buttons float-right'>
        <Link
          to={`/administrate/shop/edit`}
          className="button button-large">
          Редактировать
        </Link>
      </div>
      <h3>Данные Магазина</h3>
      <dl>
        <dt>Название</dt>
        <dd>{shop.get('title')}</dd>
        <dt>Номер телефона</dt>
        <dd>{shop.get('phone')}</dd>
        <dt>Номер банковской карты</dt>
        <dd>{shop.get('card_number')}</dd>
        <dt>Email</dt>
        <dd>{shop.get('email')}</dd>
        <dt>Логотип</dt>
        <dt><img src={shop.get('small_left_logo')} alt=""/></dt>
      </dl>
    </div>
  )
}
