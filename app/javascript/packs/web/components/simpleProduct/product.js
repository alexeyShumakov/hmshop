import React from 'react';

export default (props) => {
  let {openModal, fetchProduct, id, img} = props;
  const handleClick = () => {
    openModal(true);
    fetchProduct(id);
  }
  return(
    <div className='column'>
      <div className='product-simple' onClick={handleClick}>
        <img src={img} />
      </div>
    </div>

  )
}
