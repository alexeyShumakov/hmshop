import React from 'react';

import Category from './Category';

export default props => {
  return(
    <div className='sidebar u-p12'>
      <ul className=' sidebar-list'>
        { props.categories.map(category => {
            return(
              <Category
                key={category.get('id')}
                category={category}
                fetchCategory={props.actions.fetchCategory}
                rootCategoryId={props.rootCategoryId}
              />
            )
          })
        }
      </ul>
    </div>
  )
}
