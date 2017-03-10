import React from 'react';
import Immutable from 'immutable';
import Banners from './Banners';
import SimpleProductsList from '../simpleProduct/List';
import ProductModal from '../showcase/productModal/ProductModal';

export default props => {
  let {store, actions} = props;
  let banners = store.getIn(['home', 'banners']);
  let newest = store.getIn(['home', 'newest']);
  let modalProduct = store.get('modalProduct');
  return(
    <div className="container">
      <div className="row">
        <div className="column">
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
          <Banners banners={banners}/>
          <hr/>
          { !newest.isEmpty() &&
            <SimpleProductsList
              title='Новинки'
              openModal={actions.setModalProductState}
              fetchProduct={actions.fetchProduct}
              products={newest}
              withText={true}
            />
          }
        </div>
      </div>
    </div>
  )
}
