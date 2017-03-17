import React from 'react';

import Form from '../form';

export default (props) => {
  const product = props.store.getIn(['products', 'product']);
  const errors = props.store.getIn(['products', 'errors']);
  const setProduct = props.actions.setProduct;
  const createProduct = props.actions.createProduct;
  const action = (e)=> {e.preventDefault(); createProduct(product)};
  const title = 'Создать';
  return(
    <div>
      <h3>Создать продукт</h3>
      <Form {...{product, setProduct, action, errors, title}}/>
    </div>
  )
}
