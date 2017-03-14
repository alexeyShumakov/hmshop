import axios from '../../utils/axios';
import Immutable from 'immutable';

import actionTypes from '../constants';
import * as cartActions from './cart';

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

export function showOrderNotification(show) {
  return {
    type: actionTypes.SHOW_ORDER_NOTIFICATION,
    show
  }
}

export function setOrderErrors(errors) {
  return {
    type: actionTypes.SET_ORDER_ERRORS,
    errors
  }
}

export function createOrder(order) {
  return dispatch => {
    dispatch(setOrderLoading(true));
    return axios.post('/api/orders', {order}).then(
      response => {
        dispatch(cartActions.fetchCart());
        dispatch(setOrderLoading(false));
        dispatch(showOrderNotification(true));
      }, error => {
        let errors = Immutable.fromJS(error.response.data);
        dispatch(setOrderErrors(errors));
        dispatch(setOrderLoading(false));
      }
    )
  }
}

