import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick'
import Lazysizes from 'lazysizes';

import Carousel from './Carousel';

export default props => {
  let { product, setCurrentPicture, openModal, isOpen, isLoading, currentPicture } = props;
  return(
    <Modal
      onRequestClose={() => openModal(false)}
      isOpen={isOpen}
      contentLabel='hi'
      className='modal-product'
      overlayClassName='modal-product__overlay'
    >
      <div className="modal-product__titlebar">
        <i
          onClick={() => openModal(false)}
          className='fa fa-close'
        ></i>
      </div>
      {!isLoading &&
        <div>
          <div className="modal-product__left-side">
            <img src={currentPicture} className='lazyload' alt=""/>
            <Carousel
              pictures={product.get('pictures')}
              setCurrentPicture={setCurrentPicture}
              currentPicture={currentPicture}
            />
          </div>

          <div className="modal-product__right-side">
            <h3>{product.get('title')}</h3>
            <h3>{product.get('price')} <i className='fa fa-rub'></i></h3>
            <p>{product.get('description')}</p>
          </div>
        </div>
      }
    </Modal>
  )
}
