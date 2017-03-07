import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick'
import Lazysizes from 'lazysizes';
import Carousel from './Carousel';
import {Link} from 'react-router';
import BasketButton from '../BasketButton';
import Breadcrumbs from '../Breadcrumbs';

export default (props, context) => {
  let { product, setCurrentPicture, createLineItem,
    isLoading, currentPicture, fetchCategory } = props;
  return(
    <div className='container full-product'>
      { !isLoading &&
        <div>
          <Breadcrumbs node={product} fetchCategory={fetchCategory}/>
          <div className='row' >
            <div className="column column-60">
              <div className='full-product__big-picture-wrapper'>
                <img src={currentPicture} className='full-product__big-picture'  alt=""/>
              </div>
              <Carousel
                pictures={product.get('pictures')}
                setCurrentPicture={setCurrentPicture}
                currentPicture={currentPicture}
              />
            </div>

            <div className="column column-40">
              <h3>{product.get('title')}</h3>
              <h3>{product.get('price')} <i className='fa fa-rub'></i></h3>
              <p>{product.get('description')}</p>
              <div className="full-product__buttons">
                <BasketButton
                  create={createLineItem}
                  productId={product.get('id')}
                  klassName='button'
                />
                <button className='button button-outline' >Быстрая покупка</button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
