import axios from '../../utils/axios';
import Immutable from 'immutable';

import actionTypes from '../constants';

export function setCart(cart) {
  return {
    type: actionTypes.SET_CART,
    cart
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
