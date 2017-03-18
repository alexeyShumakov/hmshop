import React from 'react';
import Input from '../input';
import Textarea from '../textarea';
import CategoryInput from '../categoryInput';
import PicInput from './picturesInput';
import Immutable from 'immutable';

export default (props) => {
  const {isOpenModal, openModal, categories, fetchCategories,
    product, setProduct, action, errors, title, createPicture} = props;
  let pictures = product.get('pictures');
  const update = (value, field) => {
    const newProduct = product.set(field, value);
    setProduct(newProduct);
  }
  const handlePictureRemove = (picture) => {
    pictures.forEach((pic, index) => {
      if(pic.get('id')== picture.get('id')) {
        const newProduct = product.set('pictures', pictures.delete(index));
        setProduct(newProduct);
      }
    })
  }
  const handlePictureUpload = (image) => {
    let pic = createPicture(Immutable.Map({image})).then((resp)=>{
      pictures = pictures.unshift(resp);
      const newProduct = product.set('pictures', pictures);
      setProduct(newProduct);
    });
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
        <PicInput
          title='Изображение(1000x650)'
          upload={handlePictureUpload}
          remove={handlePictureRemove}
          pictures={pictures}
          errors={errors}
        />
        <hr/>
        <input className="button-primary" type="submit" value={title}/>
      </fieldset>
    </form>
  )
}
