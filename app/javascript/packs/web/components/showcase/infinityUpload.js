import React from 'react';
import Waypoint from 'react-waypoint';
import _ from 'lodash';

let isUpdated = false;
export default (params) => {
  const {filterParams, upload, categoryId} =params;
  let pushProducts = () => {
    if(!isUpdated)
      uploadProducts();
  }
  let uploadProducts = () => {
    isUpdated = true;
    let nextPage = 1 + _.toInteger(filterParams.get('page'));
    let params = filterParams.set('page', nextPage).toJS();
    upload(categoryId, params).then(()=> {
      isUpdated = false;
    });
  }
  return(
    <Waypoint
      onEnter={pushProducts}
      bottomOffset={'-150px'}
      scrollableAncestor={typeof window !== 'undefined' && window}
    />

  )
}
