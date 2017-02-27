import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick'

export default props => {
  let { product, openModal, isOpen, isLoading } = props;
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  let images = product.get('pictures').map((pic) => {
    return(<div key={pic.get('id')} >
        <img className='lazyload modal-product__big-image' data-src={pic.get('medium_img')} alt=""/>
      </div>
    )
  })
  return(
    <Modal
      onRequestClose={() =>openModal(false)}
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
