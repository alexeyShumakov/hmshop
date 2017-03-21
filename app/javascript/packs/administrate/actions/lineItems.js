import Immutable from 'immutable';

import axios from '../../utils/axios';
import actionTypes from '../constants';

import {fetchOrder} from './orders';

export function destroyLineItem(line_item) {
  let id = line_item.get('id');
  return dispatch => {
    return axios.delete(`/administrate/api/line_items/${id}`).then((response)=>{
      dispatch(fetchOrder(line_item.get('order_id')));
    })
  }
}

export function updateLineItem(line_item) {
  let id = line_item.get('id');
  let count = line_item.get('count');
  return dispatch => {
    return axios.put(`/administrate/api/line_items/${id}`, {line_item: {count}} ).then((response)=>{
      dispatch(fetchOrder(line_item.get('order_id')));
    })
  }
}

export function createLineItem(line_item) {
  return dispatch => {
    return axios.post('/administrate/api/line_items', {line_item}).then((response)=>{
      dispatch(fetchOrder(line_item.order_id));
    })
  }
}
