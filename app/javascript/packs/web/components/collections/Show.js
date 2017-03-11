import React from 'react';

export default (props) => {
  let collection = props.store.getIn(['collections', 'collection']);
  return(
    <div className='collections'>
      <div>show collection - {collection.get('title')}</div>
    </div>
  )
}
