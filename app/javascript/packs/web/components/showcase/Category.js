import React from 'react';
import {Link} from 'react-router';

import Product from './Product';
import ProductModal from './productModal/ProductModal';
import Breadcrumbs from '../Breadcrumbs';
import SortList from './sort/List';
import InfinityUpload from './infinityUpload';

export default props => {
  let {isLoading, actions, sortFilter, pageFilter, filterParams,
    products, modalProduct, category } = props;
  let product = modalProduct.get('product');
  let id = 0;

  products.find((p, i) => {
    if(p.get('id') === (product.get('id')))
      id = i;
  })
  let prevProduct = id > 0 ? products.get(id - 1) : null;
  let nextProduct = products.get(id + 1);

  let cartProducts =  products.map(product => {
    return(<Product
      key={product.get('id')}
      product={product}
      createLineItem={actions.createLineItem}
      fetchFullProduct={actions.fetchFullProduct}
      fetchProduct={actions.fetchProduct}
      openModal={actions.setModalProductState}/>
    )
  })
  return(
    <div>
      <ProductModal
        openModal={actions.setModalProductState}
        createLineItem={actions.createLineItem}
        setCurrentPicture={actions.setModalCurrentPicture}
        product={product}
        nextProduct={nextProduct}
        prevProduct={prevProduct}
        products={products}
        fetchProduct={actions.fetchProduct}
        fetchFullProduct={actions.fetchFullProduct}
        currentPicture={modalProduct.get('currentPicture')}
        isLoading={modalProduct.get('isLoading')}
        isOpen={modalProduct.get('isOpen')} />
      { !isLoading &&
          <div className='container'>
            <div className='row'>
              <div className="column">
                <Breadcrumbs node={category} fetchCategory={actions.fetchCategory} />
              </div>
            </div>

            <div className='row'>
              <div className='category column'>
                <h3 className='u-page-title'>{category.get('title')}</h3>
              </div>
            </div>

            <div className='row'>
              <div className="column">
                <SortList
                  fetchCategory={actions.fetchCategory}
                  categoryId={category.get('id')}
                  sortFilter={sortFilter}
                />
              </div>
            </div>

            <div className='showcase row'>
              {cartProducts}
            </div>
            <InfinityUpload
              filterParams={filterParams}
              upload={actions.infinityUploadCategory}
              categoryId={category.get('id')}
            />
          </div>
      }
    </div>
  )
}
