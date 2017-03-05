import axios from '../../utils/axios';
import Immutable from 'immutable';

import actionTypes from '../constants';

export function setCart(cart) {
  return {
    type: actionTypes.SET_CART,
    cart
  }
}

export function cartResetPosition() {
  return {
    type: actionTypes.CART_RESET_POSITION
  }
}

export function cartDecPosition() {
  return {
    type: actionTypes.CART_DEC_POSITION
  }

}

export function cartIncPosition() {
  return {
    type: actionTypes.CART_INC_POSITION
  }

}
export function fetchCart() {
  return dispatch => {
    return axios.get('/api/cart').then((response) => {
      let cart = Immutable.fromJS(response.data.cart);
      dispatch(setCart(cart));
    })
  }
}
