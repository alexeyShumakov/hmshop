import React from 'react';

import Product from './Product';

export default (props) => {
  let { title, products, openModal, fetchProduct, withText } = props;
  return(
    <div className='u-my12 product-simple__list'>
      <h3>{title}</h3>
      <div className="row">
        { products.map((obj)=> {
          return(
            <Product
              withText={withText}
              openModal={openModal}
              fetchProduct={fetchProduct}
              key={obj.get('id')}
              product={obj}
            />
            )
          })
        }
      </div>
    </div>
  )
}
