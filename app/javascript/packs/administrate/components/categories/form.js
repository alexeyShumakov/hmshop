import React from 'react';
import Input from '../input';
import CategoryInput from '../categoryInput';

export default (props) => {
  const { category, setCategory, action, errors, title,
    isOpenModal, openModal, fetchCategories, categories
  } = props;
  const update = (value, field) => {
    const newCategory = category.set(field, value);
    setCategory(newCategory);
  }
  return(
    <form onSubmit={action}>
      <fieldset>
        <Input
          title='Название'
          update={update}
          errors={errors}
          object={category}
          field='title'
        />
        <CategoryInput
          title='Родительская Категория'
          category={category.get('parent')}
          isOpenModal={isOpenModal}
          openModal={openModal}
          categoriesTree={categories}
          fetchCategories={fetchCategories}
          errors={errors}
          action={(category)=> {update(category, 'parent'); openModal(false)}}
        />
        <hr/>
        <input className="button-primary" type="submit" value={title}/>
      </fieldset>
    </form>
  )
}
