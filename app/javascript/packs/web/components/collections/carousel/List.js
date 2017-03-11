import React from 'react';
import Collection from './Item';

export default (props) => {
  let { collections, fetchCollection, title } = props;
  return(
    <div className='u-my12 collections__list'>
      <h3>{title}</h3>
      <div className="row">
        { collections.map((obj)=> {
          return(
            <Collection
              fetchCollection={fetchCollection}
              key={obj.get('id')}
              collection={obj}
            />
            )
          })
        }
      </div>
    </div>

  )
}
