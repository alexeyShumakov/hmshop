import React from 'react';

import Form from '../form';

export default (props) => {
  const product = props.store.getIn(['products', 'product']);
  const errors = props.store.getIn(['products', 'errors']);
  const isOpenModal = props.store.getIn(['modal', 'isOpen']);
  const categories = props.store.getIn(['categories', 'categories']);
  const { openModal, createProduct, setProduct, fetchCategories } = props.actions;
  const title = 'Создать';
  const action = (e)=> {e.preventDefault(); createProduct(product)};
  return(
    <div>
      <h3>Создать продукт</h3>
      <Form {...{isOpenModal, openModal, product, setProduct, action, errors, title, categories, fetchCategories}}/>
    </div>
  )
}
