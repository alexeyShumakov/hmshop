import React from 'react';
import Textarea from '../textarea';
import Input from '../input';
import SearchProducts from '../searchProducts';

export default (props) => {
  const { searchProducts, setSearchKeyword, searchProductsData,
    collection, setCollection, action, errors, title } = props;
  let products = collection.get('products');
  const update = (value, field) => {
    const newCollection = collection.set(field, value);
    setCollection(newCollection);
  }
  const removeProduct = (product) => {
    products.forEach((item, index)=> {
      if(item.get('id') == product.get('id')) {
        const newCollection = collection.set('products', products.delete(index))
        setCollection(newCollection);
      }
    })
  }
  const addProduct = (product) => {
    let tmpProduct = products.find((item)=>{
      return item.get('id') == product.get('id');
    })
    if(!tmpProduct) {
      const newCollection = collection.set('products',products.push(product))
      setCollection(newCollection);
    }
  }
  return(
    <form onSubmit={action}>
      <fieldset>
        <Input
          title='Название'
          update={update}
          errors={errors}
          object={collection}
          field='title'
        />
        <Textarea
          title='Описание'
          update={update}
          errors={errors}
          object={collection}
          field='description'
        />
        <label>Изображение(1000x650)</label>
        <input type="file"
          onChange={(e)=> update(e.target.files[0], 'cover')}
        />
        <label>продукты</label>
        <SearchProducts
          search={searchProducts}
          setKeyword={setSearchKeyword}
          action={addProduct}
          keyword={searchProductsData.get('keyword')}
          products={searchProductsData.get('products')}
        />
        <div className="row">
          { collection.get('products').map((product)=> {
            return(
              <div className="column column-10" key={product.get('id')}>
                <div><i className='fa fa-remove control-icon' onClick={()=> removeProduct(product)}></i></div>
                <img src={product.get('thumb_cover')} alt=""/>
                <div>{product.get('title')}</div>
              </div>
            )
            })
          }
        </div>
        {errors.has('cover') &&
          <span className='input-error'>{errors.get('cover').first()}</span>
        }
        <hr/>
        <input className="button-primary" type="submit" value={title}/>
      </fieldset>
    </form>
  )
}
