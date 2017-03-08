import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick'
import Lazysizes from 'lazysizes';
import Carousel from './Carousel';
import {Link} from 'react-router';
import BasketButton from '../BasketButton';
import Breadcrumbs from '../Breadcrumbs';
import SimpleProductsList from '../simpleProduct/List';
import ProductModal from '../showcase/productModal/ProductModal';
import Immutable from 'immutable';

export default (props, context) => {
  let { product, setCurrentPicture, createLineItem,
    isLoading, currentPicture, fetchCategory,
    actions, modalProduct
  } = props;
  return(
    <div>

      <ProductModal
        openModal={actions.setModalProductState}
        fetchProduct={actions.fetchProduct}
        createLineItem={actions.createLineItem}
        setCurrentPicture={actions.setModalCurrentPicture}
        product={modalProduct.get('product')}
        products={Immutable.List([])}
        currentPicture={modalProduct.get('currentPicture')}
        isLoading={modalProduct.get('isLoading')}
        isOpen={modalProduct.get('isOpen')} />

      { !isLoading &&
        <div  className='container full-product'>
          <div className="row">
            <div className="column">
              <Breadcrumbs node={product} fetchCategory={fetchCategory}/>
            </div>
          </div>

          <div className='row'>
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
          { !product.get('similar').isEmpty() &&
            <SimpleProductsList
              title='Похожие товары'
              openModal={actions.setModalProductState}
              fetchProduct={actions.fetchProduct}
              products={product.get('similar')}
            />
          }
          <div className='history u-my12'>
            <h3>Вы смотрели</h3>
            <div className="row">
            </div>
          </div>
        </div>
      }
    </div>
  )
}
