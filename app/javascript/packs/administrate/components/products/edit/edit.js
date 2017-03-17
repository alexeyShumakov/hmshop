import React from 'react';
import {Link, browserHistory} from 'react-router';

import Form from '../form';

export default (props) => {
  const product = props.store.getIn(['products', 'product']);
  const errors = props.store.getIn(['products', 'errors']);
  const { createProduct, destroyProduct, updateProduct, setProduct } = props.actions;
  const title = 'Изменить';
  const destroy = () => {
    destroyProduct(product.get('id')).then(()=> {
      browserHistory.push('/administrate/products');
    })
  }
  const action = (e)=> {e.preventDefault(); updateProduct(product)};
  return(
    <div>
      <div className='control-buttons float-right'>
        <Link
          to={`/administrate/products/${product.get('id')}`}
          className="button button-large">
          Отмена
        </Link>
        <button
          onClick={destroy}
          className="button button-large button-outline">
          Удалить
        </button>
      </div>
      <h3>Редактировать продукт #{product.get('id')}</h3>
      <div className="clearfix"></div>
      <Form {...{product, setProduct, action, errors, title}}/>
    </div>
  )
}
