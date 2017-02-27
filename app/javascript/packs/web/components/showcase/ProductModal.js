import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick'
import Lazysizes from 'lazysizes';

export default props => {
  let { product, setCurrentPicture, openModal, isOpen, isLoading, currentPicture } = props;
  let bigImage;
  let settings = {
    speed: 300,
    arrow: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableVidth: true,
    infinite: false
  };

  let images = product.get('pictures').map((pic) => {
    return(<div key={pic.get('id')} className='modal-product__thumb-image' >
      <img
        onClick={
          ()=> {
            setCurrentPicture(pic.get('medium_img'));
            lazySizes.loader.unveil(bigImage);
          }
        }
        className='lazyload'
        data-src={pic.get('thumb_img')} alt=""/>
      </div>
    )
  })
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
            <img ref={(img) => bigImage = img} data-src={currentPicture} className='lazyload' alt=""/>
            <Slider {...settings}>
              {images}
            </Slider>
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
