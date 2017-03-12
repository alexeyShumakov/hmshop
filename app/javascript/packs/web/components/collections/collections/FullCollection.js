import React from 'react';
import {Link} from 'react-router';

import SimpleProductsList from '../../simpleProduct/List';

export default (props) => {
  let {collection, fetchCollection, fetchProduct, setModalProductState} = props;
  let id = collection.get('id');
  let products = collection.get('products');
  return(
    <div className="collection_full">
      <div className='row'>
        <div className='column column-66'>
          <div className='collection__img-wrapper'>
            <img src={collection.get('cover')} alt=""/>
          </div>
        </div>
        <div className='column column-33'>
          <h3>{collection.get('title')}</h3>
          <p>{collection.get('description')}</p>
          <h3>{collection.get('total_price')} <i className='fa fa-rub'></i></h3>
          <div className="collection__buttons">
            <button className='button button-primary'>Купить набор</button>
          </div>
        </div>
      </div>
      <div className="row">
        { !products.isEmpty() &&
          <div className="container">
          <SimpleProductsList
            title='Продукты в наборе'
            openModal={setModalProductState}
            fetchProduct={fetchProduct}
            products={products}
            withText={true}
          />
          </div>
        }
      </div>
    </div>
  )
}
