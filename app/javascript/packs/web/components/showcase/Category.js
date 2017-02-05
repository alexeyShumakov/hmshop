import React from 'react';
import Product from './Product';

export default props => {
  let products = props.products.map(product => {
    return <Product key={product.get('id')} product={product}/>

  })
  return(
    <div className="showcase row">
      <div className="category column column-100">
        <h3>{props.category.get('title')}</h3>
      </div>
      { products }
    </div>
  )
}
