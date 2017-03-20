import React from 'react';

import Form from '../form';

export default (props) => {
  const collection = props.store.getIn(['collections', 'collection']);
  const errors = props.store.getIn(['collections', 'errors']);
  const searchProductsData = props.store.getIn(['products', 'search']);
  const { setCollection, createCollection, searchProducts, setSearchKeyword  } = props.actions;
  const action = (e)=> {e.preventDefault(); createCollection(collection)};
  const title = 'Создать';
  return(
    <div>
      <h3>Создать набор</h3>
      <Form {...{collection, setCollection, action, errors, title,
          searchProducts, setSearchKeyword, searchProductsData
      }}/>
    </div>
  )
}
