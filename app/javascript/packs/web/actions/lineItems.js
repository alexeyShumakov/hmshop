import Immutable from 'immutable';

import axios from '../../utils/axios';
import actionTypes from '../constants';
import * as cartActions from './cart';

export function destroyLineItem(id) {
  return dispatch => {
    return axios.delete(`/api/line_items/${id}`).then((response)=>{
      dispatch(cartActions.fetchCart());
    })
  }
}

export function updateLineItem(id, count) {
  return dispatch => {
    return axios.put(`/api/line_items/${id}`, {line_item: {count}} ).then((response)=>{
      dispatch(cartActions.fetchCart());
    })
  }
}

export function createLineItem(productId) {
  return dispatch => {
    return axios.post('/api/line_items', {product_id: productId}).then((response)=>{
      dispatch(cartActions.fetchCart());
    })
  }
}
