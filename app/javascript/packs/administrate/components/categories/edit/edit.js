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
  const title = 'Изменить';
  const destroy = () => {
    destroyCategory(category.get('id')).then(()=> {
      browserHistory.push('/administrate/categories');
    })
  }
  const action = (e)=> {e.preventDefault(); updateCategory(category)};
  return(
    <div>
      <div className='control-buttons float-right'>
        <Link
          to={`/administrate/categories/${category.get('id')}`}
          className="button button-large">
          Отмена
        </Link>
        <button
          onClick={destroy}
          className="button button-large button-outline">
          Удалить
        </button>
      </div>
      <h3>Редактировать категорию #{category.get('id')}</h3>
      <div className="clearfix"></div>
      <Form {...{isOpenModal, openModal, categories, fetchCategories, category, setCategory, action, errors, title}}/>
    </div>
  )
}
