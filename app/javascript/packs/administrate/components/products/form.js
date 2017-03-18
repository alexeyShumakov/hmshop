import React from 'react';
import Input from '../input';
import Textarea from '../textarea';
import CategoryInput from '../categoryInput';

export default (props) => {
  const {isOpenModal, openModal, categories, fetchCategories,
    product, setProduct, action, errors, title} = props;
  const update = (value, field) => {
    const newProduct = product.set(field, value);
    setProduct(newProduct);
  }
  return(
    <form onSubmit={action}>
      <fieldset>
        <Input
          title='Название'
          update={update}
          errors={errors}
          object={product}
          field='title'
        />
        <Input
          title='Цена'
          update={update}
          errors={errors}
          object={product}
          field='price'
        />
        <CategoryInput
          title='Категория'
          category={product.get('category')}
          isOpenModal={isOpenModal}
          openModal={openModal}
          categoriesTree={categories}
          fetchCategories={fetchCategories}
          errors={errors}
          action={(category)=> {update(category, 'category'); openModal(false)}}
        />
        <Textarea
          title='Описание'
          update={update}
          errors={errors}
          object={product}
          field='description'
        />
        <hr/>
        <input className="button-primary" type="submit" value={title}/>
      </fieldset>
    </form>
  )
}
