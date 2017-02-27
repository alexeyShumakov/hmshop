import React from 'react';
import Slider from 'react-slick'

const PrevArrow = (props) => {
  return(
    <button {...props} >
      <i className='fa fa-chevron-circle-left'></i>
    </button>
  )
}

const NextArrow = (props) => {
  return(
    <button {...props} >
      <i className='fa fa-chevron-circle-right'></i>
    </button>
  )
}

export default class Carousel extends React.Component {

  shouldComponentUpdate() {
    return false;
  }
  render() {
    let { pictures, setCurrentPicture, currentPicture } = this.props;
    let settings = {
      speed: 300,
      arrow: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableVidth: true,
      infinite: false,
      prevArrow: <PrevArrow/>,
      nextArrow: <NextArrow/>

    };

    let images = pictures.map((pic) => {
      return(<div key={pic.get('id')} className='modal-product__thumb-image' >
        <img
          onClick={
            ()=> { setCurrentPicture(pic.get('medium_img')); }
          }
          className='lazyload'
          data-src={pic.get('thumb_img')} alt=""/>
        </div>
      )
    })
    return(
      <div className='modal-product__slider-wrapper'>
        <Slider {...settings}>
          {images}
        </Slider>
      </div>

    )
  }
}
