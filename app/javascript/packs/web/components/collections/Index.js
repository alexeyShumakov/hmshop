import React from 'react';
import {Link} from 'react-router';
import Immutable from 'immutable';

import Collection from './collections/Collection';
import ProductModal from '../showcase/productModal/ProductModal';

export default (props) => {
  let { store, actions } = props;
  let { createLineItem, fetchCollection, setCurrentPicture, setModalProductState, fetchProduct } = actions;
  let collections = store.getIn(['collections', 'collections']);
  let isLoading = store.getIn(['collections', 'isLoading']);
  let modalProduct =  store.get('modalProduct');
  let currentPicture =  store.getIn(['modalProduct', 'currentPicture']);
  return(
    <div>
      <ProductModal
        openModal={actions.setModalProductState}
        fetchProduct={actions.fetchProduct}
        fetchFullProduct={actions.fetchFullProduct}
        createLineItem={actions.createLineItem}
        setCurrentPicture={actions.setModalCurrentPicture}
        product={modalProduct.get('product')}
        products={Immutable.List([])}
        currentPicture={modalProduct.get('currentPicture')}
        isLoading={modalProduct.get('isLoading')}
        isOpen={modalProduct.get('isOpen')} />

      { !isLoading &&
        <div className='container'>
          <div className='breadcrumbs'>
            <span>
              <a className='breadcrumbs__item' href="/">Главная</a>
              <i className='breadcrumbs__item fa fa-angle-right'></i>
            </span>
            <span>Наборы</span>
          </div>
          <h3 className='u-page-title'>Наборы</h3>
          { !collections.isEmpty() && collections.map((collection)=>{
              let key = collection.get('id')
            return <Collection {...{key, collection, setModalProductState, fetchProduct,
                fetchCollection, setCurrentPicture, currentPicture, createLineItem}} />
            })
          }
        </div>
      }
    </div>
  )
}
