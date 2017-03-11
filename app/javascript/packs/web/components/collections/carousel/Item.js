import React from 'react';
import {Link} from 'react-router';

export default (props) => {
  let {collection, fetchCollection }=  props;
  let id = collection.get('id');
    return(
      <div className='column column-33'>
        <Link
          key={id}
          to={`/collections/${id}`}
          onClick={()=> fetchCollection(id)}
        >
          <img src={collection.get('cover')}/>
        </Link>
      </div>
    )
}
