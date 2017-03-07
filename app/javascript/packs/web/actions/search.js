import axios from '../../utils/axios';
import Immutable from 'immutable';

import actionTypes from '../constants';

export function setSearchKeyword(keyword) {
  return {
    type: actionTypes.SET_SEARCH_KEYWORD,
    keyword
  }
}

export function setSearchProducts(products) {
  return {
    type: actionTypes.SET_SEARCH_PRODUCTS,
    products
  }
}

export function searchProducts(keyword) {
  return dispatch => {
    return axios.get('/api/products/search', {params: {keyword}}).then((response) => {
      let products = Immutable.fromJS(response.data.products);
      dispatch(setSearchProducts(products));
    })
  }
}
