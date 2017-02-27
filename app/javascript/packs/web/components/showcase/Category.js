import React from 'react';
import Product from './Product';
import ProductModal from './ProductModal';

export default props => {
  let { actions, products, modalProduct, category } = props;
  products =  products.map(product => {
    return(<Product
      key={product.get('id')}
      product={product}
      fetchProduct={actions.fetchProduct}
      openModal={actions.setModalProductState}/>
    )

  })
  return(
    <div className="showcase row">
      <ProductModal
        openModal={actions.setModalProductState}
        setCurrentPicture={actions.setModalCurrentPicture}
        product={modalProduct.get('product')}
        currentPicture={modalProduct.get('currentPicture')}
        isLoading={modalProduct.get('isLoading')}
        isOpen={modalProduct.get('isOpen')} />
      <div className="category column column-100">
        <h3>{category.get('title')}</h3>
      </div>
      { products }
    </div>
  )
}
