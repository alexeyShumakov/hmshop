import React from 'react';
import {Link} from 'react-router';
import Immutable from 'immutable';

import FullCollection from './collections/FullCollection';
import ProductModal from '../showcase/productModal/ProductModal';

export default (props) => {
  let { store, actions } = props;
  let { createLineItem, fetchCollections, fetchCollection, setCurrentPicture, setModalProductState, fetchProduct } = actions;
  let collection = store.getIn(['collections', 'collection']);
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
            <span>
              <Link
                to='/collections'
                onClick={fetchCollections}
                className='breadcrumbs__item'>
                Наборы
              </Link>
              <i className='breadcrumbs__item fa fa-angle-right'></i>
            </span>
            <span>{collection.get('title')}</span>
          </div>
          <FullCollection {...{collection, setModalProductState, fetchProduct, createLineItem,
                 setCurrentPicture, currentPicture}} />
        </div>
      }
    </div>
  )
}
