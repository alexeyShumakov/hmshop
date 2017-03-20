import React from 'react';
import {Link} from 'react-router';

import SimpleProductsList from '../../simpleProduct/List';
import BasketButton from '../../BasketButton';

export default (props) => {
  let {createLineItem, collection, fetchCollection, fetchProduct, setModalProductState} = props;
  let id = collection.get('id');
  let products = collection.get('products');
  let productIds = products.map((p) => {return p.get('id')});
  return(
    <div className="collection">
      <div className='row'>
        <div className='column column-66'>
          <Link
            className='collection__img-wrapper'
            to={`/collections/${id}`}
            onClick={()=> {fetchCollection(id)}}
          >
            <img src={collection.get('cover_medium')} alt=""/>
          </Link>
        </div>
        <div className='column column-33'>
          <h4>{collection.get('title')}</h4>
          <h3>{collection.get('total_price')} <i className='fa fa-rub'></i></h3>
          <p>{collection.get('description')}</p>
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
