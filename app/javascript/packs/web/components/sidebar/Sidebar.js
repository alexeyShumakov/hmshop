import React from 'react';
import Category from './Category';
import ToTop from './ToTop';
import Collections from './Collections';

export default props => {
  return(
    <div className='sidebar u-p12'>
      <ul className='sidebar-list'>
        { props.categories.map(category => {
            return(
              <Category
                key={category.get( 'id')}
                category={category}
                fetchCategory={props.actions.fetchCategory}
                rootCategoryId={props.rootCategoryId}
              />
            )
          })
        }
        <Collections
          collections={props.collections}
          fetchCollection={props.actions.fetchCollection}
          fetchCollections={props.actions.fetchCollections}
        />
      </ul>
      <ToTop/>
    </div>
  )
}
