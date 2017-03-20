import React from 'react';
import {Link} from 'react-router';

export default (props) => {
  const { collection, destroy } = props;
  return(
    <tr>
      <td>
        <Link to={`/administrate/collections/${collection.get('id')}`}>
          #{collection.get('id')}
        </Link>
      </td>
      <td>{collection.get('title')}</td>
      <td><img src={collection.get('cover_medium')} alt="" className='u-table-img'/></td>
      <td>
        <Link to={`/administrate/collections/${collection.get('id')}/edit`}>
          <i className="control-icon fa fa-pencil fa-lg"></i>
        </Link>
        <i onClick={destroy} className="control-icon fa fa-remove fa-lg"></i>
      </td>
    </tr>
  )
}
