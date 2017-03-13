import axios from '../../utils/axios';
import Immutable from 'immutable';

import actionTypes from '../constants';

export function setOrderLoading(isLoading) {
  return {
    type: actionTypes.SET_ORDER_LOADING,
    isLoading
  }

}

export function setOrder(order) {
  return {
    type: actionTypes.SET_ORDER,
    order
  }
}

export function createOrder(order) {
  return dispatch => {
    dispatch(setOrderLoading(true));
    return axios.post('/api/orders', {order}).then(
      response => {
        console.log(response);
      }, error => {
        console.log(error)
      }
    )
  }
}

