import React from 'react';
import {Link, browserHistory} from 'react-router';

import Form from '../form';

export default (props) => {
  const collection = props.store.getIn(['collections', 'collection']);
  const errors = props.store.getIn(['collections', 'errors']);
  const { createCollection, destroyCollection, updateCollection, setCollection } = props.actions;
  const title = 'Изменить';
  const destroy = () => {
    destroyCollection(collection.get('id')).then(()=> {
      browserHistory.push('/administrate/collections');
    })
  }
  const action = (e)=> {e.preventDefault(); updateCollection(collection)};
  return(
    <div>
      <div className='control-buttons float-right'>
        <Link
          to={`/administrate/collections/${collection.get('id')}`}
          className="button button-large">
          Отмена
        </Link>
        <button
          onClick={destroy}
          className="button button-large button-outline">
          Удалить
        </button>
      </div>
      <h3>Редактировать баннер #{collection.get('id')}</h3>
      <div className="clearfix"></div>
      <Form {...{collection, setCollection, action, errors, title}}/>
    </div>
  )
}
