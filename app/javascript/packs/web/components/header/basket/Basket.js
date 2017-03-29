import React from 'react';
import { Link } from 'react-router';
import Tether from 'tether';
import _ from 'lodash';

import LineItemList from './LineItemList';

export default class Basket extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isShow: false };
    _.bindAll(this, 'show', 'hide', 'outSideClick');
  }

  outSideClick(e) {
    let isShow = this.state.isShow;
    const el = this.container;
    if(!el.contains(e.target) && isShow) this.hide();
  }

  componentWillMount(){
    document.addEventListener('click', this.outSideClick, false)
  }
  componentWillUnmount(){
    document.removeEventListener('click', this.outSideClick, false)
  }

  show() {
    let lineItems = this.props.cart.get('line_items')
    if(lineItems && lineItems.size > 0) {
      this.setState({isShow: true});
    } else {
      this.props.fetchCart().then(()=>{
        if(this.props.cart.get('line_items').size > 0)
          this.setState({isShow: true});
        }
      )
    }

  }

  hide() {
    this.setState({isShow: false});
    this.props.resetPosition();
  }

  render() {
    let { cart, incrementPosition, decrementPosition, currentPosition, fetchCart } = this.props;
    let { isShow } = this.state;
    return(
      <div ref={ref => {this.container = ref}} className="basket">
        <div className='basket__icon' >
          <i onClick={this.show} className="nav__icon fa fa-shopping-cart fa-lg" >
          </i>
          { this.props.cart.get('total_count') > 0 &&
            <span className='basket__counter'>
              <b>{this.props.cart.get('total_count')}</b>
            </span>
          }
        </div>
        <div className={isShow ? 'basket__content_show' : 'basket__content'} >
          <div className='basket__info'>
            <span className='basket__info-count'>
              {cart.get('total_count')} шт.
            </span>

            <span className='basket__info-price'>
              {cart.get('total_price')} руб.
            </span>
          </div>
          { cart.get('line_items') &&
            <LineItemList
              incrementPosition={incrementPosition}
              decrementPosition={decrementPosition}
              currentPosition={currentPosition}
              lineItems={cart.get('line_items') }
            />
          }
          <Link
            onClick={this.hide}
            className="button button-clear basket__to-cart"
            to='/cart'
          >В корзину</Link>
        </div>
      </div>
    )
  }
}
