import React from 'react';
import {Link} from 'react-router';

export default (props) => {
  let {collection, fetchCollection, klassName }=  props;
  let id = collection.get('id');
  klassName = klassName || 'column column-33';
    return(
      <div className={klassName}>
        <Link
          key={id}
          to={`/collections/${collection.get('slug')}`}
          onClick={()=> fetchCollection(id)}
        >
          <img src={collection.get('thumb_cover')}/>
        </Link>
      </div>
    )
}
