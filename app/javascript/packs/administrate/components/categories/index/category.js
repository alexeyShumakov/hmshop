import React from 'react';
import {Link} from 'react-router';

const Category = (props) => {
  const children = props.category.get('children');
  return(
    <ul className='u-no-list-style'>
      <Link
        to={`/administrate/categories/${props.category.get('id')}`}
        className='select-category__title'>
        {props.category.get('title')}
      </Link>
      {children && children.map((item)=>{
        return <li key={item.get('id')}><Category category={item}/></li>
      })}
    </ul>
  )
}

export default Category;
