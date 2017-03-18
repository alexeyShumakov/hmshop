import React from 'react';

const Category = (props) => {
  const children = props.category.get('children');
  const categoryWithoutChildren = props.category.delete('children');
  return(
    <ul className='u-no-list-style'>
      <span className='select-category__title' onClick={()=> props.action(categoryWithoutChildren)}>
        {props.category.get('title')}
      </span>
      {children && children.map((item)=>{
        return <li key={item.get('id')}><Category category={item} action={props.action}/></li>
      })}
    </ul>
  )
}

export default Category;
