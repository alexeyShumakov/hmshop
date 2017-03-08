import React from 'react';

import Product from './product';

export default (props) => {
  let { title, products, openModal, fetchProduct } = props;
  return(
    <div className='u-my12'>
      <h3>{title}</h3>
      <div className="row">
        { products.map((obj)=> {
          return(
            <Product
              openModal={openModal}
              fetchProduct={fetchProduct}
              key={obj.get('id')}
              id={obj.get('id')}
              img={obj.get('thumb_cover')}
            />
            )
          })
        }
      </div>
    </div>
  )
}
