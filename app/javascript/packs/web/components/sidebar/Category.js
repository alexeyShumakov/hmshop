import React from 'react';
import { Link } from 'react-router';

export default props => {
  function fetchCategory() {
    props.fetchCategory(props.category.get('id'))
  }
  return(
    <li>
      <Link to={`/categories/${props.category.get('id')}`} onClick={fetchCategory}>
        <i className="nav__icon fa fa-heart-o fa-lg"></i>
      </Link>
    </li>
  )
}
