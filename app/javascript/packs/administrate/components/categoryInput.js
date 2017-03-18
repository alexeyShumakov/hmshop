import React from 'react';
import _ from 'lodash';
import Modal from './categories/modal/modalTree';

export default (props) => {
  const {errors, action, title, category, isOpenModal, openModal, fetchCategories, categoriesTree } = props;
  const open = () => {
    openModal(true);
    fetchCategories();
  }
  return(
    <div>
      <Modal {...{openModal, isOpenModal, categoriesTree, action}}/>
      <label>{title}</label>
      { _.isEmpty(category) ?
          <div>
            <i
              onClick={open}
              className="fa fa-plus control-icon"></i>

          {errors.has('category') &&
            <span className='input-error'>{errors.get('category').first()}</span>
          }
          </div>
          :
          <div>
            {category.get('title')}
          <i
            onClick={open}
            className="fa fa-pencil control-icon"></i>
          </div>
      }
    </div>
  )
}
