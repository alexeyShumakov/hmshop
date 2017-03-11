import React from 'react';
import {Link} from 'react-router';

export default (props) => {
  let collections = props.store.getIn(['collections', 'collections']);
  return(
    <div>
      {
        collections.map((item)=>{
          return(
            <div key={item.get('id')}>
              <Link to={`/collections/${item.get('id')}`}>
                <b>{item.get('title')}</b>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}
