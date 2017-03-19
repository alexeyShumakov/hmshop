import React from 'react';
import {Link, browserHistory} from 'react-router';

import Form from '../form';

export default (props) => {
  const category = props.store.getIn(['categories', 'category']);
  const errors = props.store.getIn(['categories', 'errors']);
  const isOpenModal = props.store.getIn(['modal', 'isOpen']);
  const categories = props.store.getIn(['categories', 'categories']);
  const {openModal, fetchCategories, createCategory,
    destroyCategory, updateCategory, setCategory} = props.actions;
  const title = 'Создать';
  const destroy = () => {
    destroyCategory(category.get('id')).then(()=> {
      browserHistory.push('/administrate/categories');
    })
  }
  const action = (e)=> {e.preventDefault(); createCategory(category)};
  return(
    <div>
      <h3>Создать категорию #{category.get('id')}</h3>
      <Form {...{isOpenModal, openModal, categories, fetchCategories, category, setCategory, action, errors, title}}/>
    </div>
  )
}
