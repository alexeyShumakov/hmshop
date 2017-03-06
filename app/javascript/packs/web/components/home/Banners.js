import React from 'react';
import Slider from 'react-slick'

const PrevArrow = (props) => {
  return(
    <button {...props} className='banners__arrow-left' >
      <i className='fa fa-angle-left'></i>
    </button>
  )
}

const NextArrow = (props) => {
  return(
    <button {...props} className='banners__arrow-right'>
      <i className='fa fa-angle-right'></i>
    </button>
  )
}

export default class Carousel extends React.Component {

  shouldComponentUpdate() {
    return false;
  }
  render() {
    let { banners } = this.props;
    let settings = {
      autoplay: true,
      autoplaySpeed: 7000,
      speed: 700,
      arrow: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow/>,
      nextArrow: <NextArrow/>

    };

    banners = banners.map((banner) => {
      let style = {
        backgroundImage: `url(${banner.get('img')})`
      }
      return(
          <a key={banner.get('id')} href={banner.get('url')} >
            <div src={banner.get('img')} className='banners__img' style={style} />
          </a>
      )
    })
    return(
      <div className='banners'>
        <Slider {...settings}>
          {banners}
        </Slider>
      </div>
    )
  }
}
