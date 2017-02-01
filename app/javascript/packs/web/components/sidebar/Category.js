import React from 'react';
import { Link } from 'react-router';

export default props => {
  return(
    <li>
      <Link to={`/categories/${props.category.get('id')}`}>
        <i className="nav__icon fa fa-heart-o fa-lg"></i>
      </Link>
    </li>
  )
}
