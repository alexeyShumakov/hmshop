import React from 'react';
import {Link, browserHistory} from 'react-router';
export default (props) => {
  const category = props.store.getIn(['categories', 'category']);

  const destroy = () => {
    props.actions.destroyCategory(category.get('id')).then(()=> {
      browserHistory.push('/administrate/categories');
    })
  }
  return(
    <div>
      <div className='control-buttons float-right'>
        <Link
          to={`/administrate/categories/${category.get('id')}/edit`}
          className="button button-large">
          Редактировать
        </Link>
        <button
          onClick={destroy}
          className="button button-large button-outline">
          Удалить
        </button>
      </div>
      <h3>Категория #{category.get('id')}</h3>
      <dl>
        <dt>id</dt>
        <dd>{category.get('id')}</dd>
        <dt>Название</dt>
        <dd>{category.get('title')}</dd>
        <dt>Родительская категрия</dt>
        <dd>{category.getIn(['parent', 'title'])}</dd>
        <dt>Иконка</dt>
        <dd><img src={category.get('medium_icon')} alt=""/></dd>
      </dl>
    </div>
  )
}
