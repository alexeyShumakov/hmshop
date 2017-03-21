import React from 'react';
import {Link} from 'react-router';

export default (props) => {
  const { post, destroy } = props;
  return(
    <tr>
      <td>
        <Link to={`/administrate/posts/${post.get('id')}`}>
          #{post.get('id')}
        </Link>
      </td>
      <td>{post.get('title')}</td>
      <td>{post.get('preview')}</td>
      <td>
        <Link to={`/administrate/posts/${post.get('id')}/edit`}>
          <i className="control-icon fa fa-pencil fa-lg"></i>
        </Link>
        <i onClick={destroy} className="control-icon fa fa-remove fa-lg"></i>
      </td>
    </tr>
  )
}
