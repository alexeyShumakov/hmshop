import React from 'react';

export default (props) => {
  const collection = props.store.getIn(['collections', 'collection']);
  const isLoading = props.store.getIn(['collections', 'isLoading']);
  return(
    <div className='collections'>
      { !isLoading &&
        <div>show collection - {collection.get('title')}</div>
      }
    </div>
  )
}
