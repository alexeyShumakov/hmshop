import React from 'react';
import {Link} from 'react-router';
import CategoryNode from './category';

export default (props) => {
  let categories = props.store.getIn(['categories', 'categories']);
  return(
    <div>
      <div className='control-buttons float-right'>
        <Link
          to='/administrate/categories/new'
          className="button button-large">
          Новая Категория
        </Link>
      </div>
      <h3>Категории</h3>
      <div className="clearfix"></div>
      <div>
        { categories.map((category)=>{
            return <CategoryNode key={category.get('id')} category={category} />
          })
        }
      </div>
    </div>
  )
}
