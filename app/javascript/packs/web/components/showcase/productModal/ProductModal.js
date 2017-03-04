import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick'
import Lazysizes from 'lazysizes';

import Carousel from './Carousel';

export default props => {
  let { product, setCurrentPicture, createLineItem,
    openModal, isOpen, isLoading, fetchProduct,
    currentPicture, nextProduct, prevProduct } = props;
  return(
    <Modal
      onRequestClose={() => {openModal(false); setCurrentPicture(null)}}
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
      <div className="modal-product__content">
        {!isLoading &&
          <div>
            <div className="modal-product__left-side">
              <div className="modal-product__big-image-wrapper">
                <img src={currentPicture} className='modal-product__big-image' alt=""/>
              </div>
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
              <div className="modal-product__buttons">
                <button onClick={() => {createLineItem(product.get('id'))}} className='button' >Добавить в корзину</button>
                <button className='button button-outline' >Быстрая покупка</button>
              </div>
            </div>
          </div>
        }
      </div>

      { prevProduct &&
        <div className='modal-product__left-arrow'>
          <i  onClick={()=>{setCurrentPicture(null); fetchProduct(prevProduct.get('id'))}}
              className='fa fa-chevron-left'>
          </i>
        </div>
      }

      { nextProduct &&
        <div className='modal-product__right-arrow'>
          <i  onClick={()=>{setCurrentPicture(null); fetchProduct(nextProduct.get('id'))}}
            className='fa fa-chevron-right'>
          </i>
        </div>
      }
    </Modal>
  )
}
