import React from 'react';

import Form from '../form';

export default (props) => {
  const collection = props.store.getIn(['collections', 'collection']);
  const errors = props.store.getIn(['collections', 'errors']);
  const setCollection = props.actions.setCollection;
  const createCollection = props.actions.createCollection;
  const action = (e)=> {e.preventDefault(); createCollection(collection)};
  const title = 'Создать';
  return(
    <div>
      <h3>Создать набор</h3>
      <Form {...{collection, setCollection, action, errors, title}}/>
    </div>
  )
}
