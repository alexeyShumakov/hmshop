import React from 'react';
import {Link} from 'react-router';

export default (props) => {
  let { item, fetchCategory, categoryId, currentValue } = props;
  let sort  = item.get('value');
  let title = item.get('title');
  let handleClick = () => {
    fetchCategory(categoryId, {sort})
  }
  return(
    <span className='sort-filter__item'>
      { currentValue === sort ?
          <b>{title}</b> :
          <Link
            onClick={handleClick}
            to={ {pathname: `/categories/${categoryId}`, query: {sort} }}
          >{title}
          </Link>
      }
    </span>
  )
}
