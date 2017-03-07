import React from 'react';
import Product from './Product';
import ProductModal from './productModal/ProductModal';

export default props => {
  let {isLoading, actions, products, modalProduct, category } = props;
  let product = modalProduct.get('product');

  let prevProduct = products.find((p, i) => {
    return p.get('id') === (product.get('id') - 1)
  })
  let nextProduct = products.find((p, i) => {
    return p.get('id') === (product.get('id') + 1)
  })

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
    <div className='showcase row'>
      <ProductModal
        openModal={actions.setModalProductState}
        createLineItem={actions.createLineItem}
        setCurrentPicture={actions.setModalCurrentPicture}
        product={product}
        nextProduct={nextProduct}
        prevProduct={prevProduct}
        products={products}
        fetchProduct={actions.fetchProduct}
        currentPicture={modalProduct.get('currentPicture')}
        isLoading={modalProduct.get('isLoading')}
        isOpen={modalProduct.get('isOpen')} />
      { !isLoading &&
        <div className='showcase row'>
          <div className='category column column-100'>
            <h3>{category.get('title')}</h3>
          </div>
          {cartProducts}
        </div>
      }
    </div>
  )
}
