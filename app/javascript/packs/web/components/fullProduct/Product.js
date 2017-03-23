import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick'
import {Link} from 'react-router';
import Immutable from 'immutable';

import Carousel from './Carousel';
import Lazysizes from 'lazysizes';
import Breadcrumbs from '../Breadcrumbs';
import BasketButton from '../BasketButton';
import SimpleProductsList from '../simpleProduct/List';
import CollectionCarousel from '../collections/carousel/List';
import ProductModal from '../showcase/productModal/ProductModal';

export default (props, context) => {
  let { product, setCurrentPicture, createLineItem,
    isLoading, currentPicture, fetchCategory,
    actions, modalProduct, history
  } = props;
  return(
    <div>

      <ProductModal
        openModal={actions.setModalProductState}
        fetchProduct={actions.fetchProduct}
        fetchFullProduct={actions.fetchFullProduct}
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
              </div>
            </div>
          </div>
          <hr/>
          { !product.get('collections').isEmpty() &&
              <CollectionCarousel
                title='Состоит в наборах'
                fetchCollection={actions.fetchCollection}
                collections={product.get('collections')}
                klassName='column column-20'
              />

          }
          { !product.get('similar').isEmpty() &&
            <SimpleProductsList
              title='Похожие товары'
              openModal={actions.setModalProductState}
              fetchProduct={actions.fetchProduct}
              products={product.get('similar')}
              withText={true}
            />
          }
          { !history.isEmpty() &&
            <SimpleProductsList
              title='Вы смотрели'
              openModal={actions.setModalProductState}
              fetchProduct={actions.fetchProduct}
              products={history}
            />
          }
        </div>
      }
    </div>
  )
}
