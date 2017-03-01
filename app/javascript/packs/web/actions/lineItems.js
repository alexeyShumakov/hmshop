import Immutable from 'immutable';

import axios from '../../utils/axios';
import actionTypes from '../constants';
import * as cartActions from './cart';

export function createLineItem(productId) {
  return dispatch => {
    return axios.post('/api/line_items', {product_id: productId}).then((response)=>{
      dispatch(cartActions.fetchCart());
    })
  }
}
