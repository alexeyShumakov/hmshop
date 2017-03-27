import React from 'react';
import {Link, browserHistory} from 'react-router';

import Form from '../form';

export default (props) => {
  const shop = props.store.getIn(['shop', 'shop']);
  const errors = props.store.getIn(['shop', 'errors']);
  const isLoading = props.store.getIn(['shop', 'isLoading']);
  const { updateShop, setShop } = props.actions;
  const title = 'Изменить';
  const action = (e)=> {e.preventDefault(); updateShop(shop, false)};
  return(
    <div>
      {!isLoading &&
        <div>
          <div className='control-buttons float-right'>
            <Link
              to={`/administrate/shop`}
              className="button button-large">
              Отмена
            </Link>
          </div>
          <h3>Редактировать Данные Магазина</h3>
          <div className="clearfix"></div>
          <Form {...{shop, setShop, action, errors, title}}/>
        </div>
      }
    </div>
  )
}
