import React from 'react';

export default (props) => {
  let {withText, openModal, fetchProduct, product} = props;
  const handleClick = () => {
    openModal(true);
    fetchProduct(product.get('id'));
  }
  return(
    <div className='column column-20'>

      <div className='product-simple' onClick={handleClick}>
        <img src={product.get('thumb_cover')} />
        { withText &&
          <div className='product-simple__info'>
            <div className='product-simple__title'>{product.get('title')}</div>
            <b className='product-simple__price'>
              {product.get('price')}
              <i className='fa fa-rub'></i>
            </b>
          </div>
        }
      </div>
    </div>

  )
}
