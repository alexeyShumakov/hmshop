import axios from '../../utils/axios';
import Immutable from 'immutable';
import { browserHistory } from 'react-router';
import _ from 'lodash';

import store from '../store/store';
import actionTypes from '../constants';
import {showNotification} from './notifications';

function isFromServer() {
  return store.getState().getIn(['orders','fromServer']);
}

const emptyOrder = Immutable.fromJS({ name: '', email: '', phone: '', address: '', line_items: '', total_price: 0});

export function setOrder(order) {
  return {
    type: actionTypes.SET_ORDER,
    order
  }
}
export function resetOrdersData() {
  return dispatch => {
    dispatch(setOrder(emptyOrder));
    dispatch(setOrderErrors(Immutable.Map({})));
  }
}

export function setOrderErrors(errors) {
  return {
    type: actionTypes.SET_ORDER_ERRORS,
    errors
  }
}

export function setOrdersLoading(isLoading) {
  return {
    type: actionTypes.SET_ORDERS_LOADING,
    isLoading
  }
}

export function setOrdersFromServer(fromServer) {
  return {
    type: actionTypes.SET_ORDERS_FROM_SERVER,
    fromServer
  }
}

export function setOrders(orders) {
  return {
    type: actionTypes.SET_ORDERS,
    orders
  }
}

export function updateOrder(order) {
  const id = order.get('id');
  let formData = new FormData();
  formData.append('order[name]', order.get('name'))
  formData.append('order[email]', order.get('email'))
  formData.append('order[phone]', order.get('phone'))
  formData.append('order[address]', order.get('address'))

  return dispatch => {
    dispatch(setOrdersLoading(true));
    return axios.put(`/administrate/api/orders/${id}`, formData).then((response)=>{
      dispatch(setOrdersLoading(false));
      dispatch(showNotification('Заказ успешно обновлен.'));
    }, error => {
      const errors = Immutable.fromJS(error.response.data)
      dispatch(setOrderErrors(errors));
    })
  }
}

export function destroyOrder(id) {
  return dispatch => {
    dispatch(setOrdersLoading(true));
    return axios.delete(`/administrate/api/orders/${id}`).then((response)=>{
      browserHistory.push('/administrate/orders');
      dispatch(showNotification('Заказ успешно удален.'));
      dispatch(setOrdersLoading(false));
    })
  }
}

export function fetchOrder(id) {
  if(isFromServer())
    return dispatch => { dispatch(setOrdersFromServer(false)) }

  return dispatch => {
    dispatch(setOrdersLoading(true));
    return axios.get(`/administrate/api/orders/${id}`).then((response)=>{
      const order = Immutable.fromJS(response.data.order)
      dispatch(setOrder(order));
      dispatch(setOrdersLoading(false));
    })
  }
}

export function fetchOrders() {
  if(isFromServer())
    return dispatch => { dispatch(setOrdersFromServer(false)) }

  return dispatch => {
    dispatch(setOrdersLoading(true));
    return axios.get(`/administrate/api/orders`).then((response)=>{
      const orders = Immutable.fromJS(response.data.orders)
      dispatch(setOrders(orders));
      dispatch(setOrdersLoading(false));
    })
  }
}

