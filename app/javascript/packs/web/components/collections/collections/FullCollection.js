import React from 'react';
import {Link} from 'react-router';

import SimpleProductsList from '../../simpleProduct/List';
import BasketButton from '../../BasketButton';

export default (props) => {
  let {collection, fetchCollection, fetchProduct, setModalProductState, createLineItem} = props;
  let id = collection.get('id');
  let products = collection.get('products');
  let productIds = products.map((p) => {return p.get('id')});

  return(
    <div className="collection_full">
      <div className='row'>
        <div className='column column-66'>
          <div className='collection__img-wrapper'>
            <img src={collection.get('cover_medium')} alt=""/>
          </div>
        </div>
        <div className='column column-33'>
          <h3>{collection.get('title')}</h3>
          <h3>{collection.get('total_price')} <i className='fa fa-rub'></i></h3>
          <p>{collection.get('description')}</p>
          <div className="collection__buttons">
            <BasketButton
              create={createLineItem}
              productId={productIds}
              klassName='button'
            />
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
