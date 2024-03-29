import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick'
import Lazysizes from 'lazysizes';
import {Link} from 'react-router';

import Carousel from './Carousel';
import BasketButton from '../../BasketButton';
import ForExample from '../../fullProduct/forExample';

export default props => {
  let { product, setCurrentPicture, createLineItem, fetchFullProduct,
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
              <h4>{product.get('title')}</h4>
              <h3>{product.get('price')} <i className='fa fa-rub'></i></h3>
              { product.get('for_example') && <ForExample/> }
              <p>{product.get('description')}</p>
              <div className="modal-product__buttons">
                <BasketButton
                  clickCallback={()=> openModal(false)}
                  create={createLineItem}
                  productId={product.get('id')}
                  klassName='button'
                />
                <Link
                  to={`/products/${product.get('slug')}`}
                  onClick={()=> {
                    openModal(false);
                    fetchFullProduct(product.get('id'))
                    }
                  }
                  className='button button-clear'>
                    Узнать больше о товаре
                  <i className="fa fa-chevron-right"></i>
                </Link>
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
