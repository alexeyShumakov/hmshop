import React from 'react';
import Product from './Product';
import ProductModal from './ProductModal';

export default props => {
  let products = props.products.map(product => {
    return <Product key={product.get('id')} product={product} openModal={props.actions.setModalProductState}/>

  })
  return(
    <div className="showcase row">
      <ProductModal
        openModal={props.actions.setModalProductState}
        product={props.modalProduct.get('product')}
        isOpen={props.modalProduct.get('isOpen')} />
      <div className="category column column-100">
        <h3>{props.category.get('title')}</h3>
      </div>
      { products }
    </div>
  )
}
