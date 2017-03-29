import React from 'react';
import {Link} from 'react-router';

export default (props) => {
  return(
    <span>
      <Link
        className='breadcrumbs__item'
        onClick={props.fetch}
        to={`/categories/${props.id}`}>{props.title}
      </Link>
      <i className='breadcrumbs__item fa fa-angle-right'></i>
    </span>
  )
}
