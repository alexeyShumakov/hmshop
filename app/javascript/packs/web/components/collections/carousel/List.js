import React from 'react';
import Collection from './Item';

export default (props) => {
  let { collections, fetchCollection, title, klassName } = props;
  return(
    <div className='u-my12 collections__list'>
      <h4>{title}</h4>
      <div className="row">
        { collections.map((obj)=> {
          return(
            <Collection
              klassName={klassName}
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
