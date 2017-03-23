import React from 'react';

import SortItem from './Item';

export default (props) => {
  let { slug, categoryId, fetchCategory, sortFilter } = props;
  let currentValue = sortFilter.get('currentValue');
  return(
    <div>
      <span>Выводить: </span>
      { sortFilter.get('items').map((item, key)=> {
        return <SortItem {...{key, slug, item, fetchCategory, categoryId, currentValue}} />
        })
      }
    </div>
  )
}
