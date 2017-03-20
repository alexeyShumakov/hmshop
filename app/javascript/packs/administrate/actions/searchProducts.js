import axios from '../../utils/axios';
import Immutable from 'immutable';

import actionTypes from '../constants';

export function setSearchProducts(products) {
  return {
    type: actionTypes.SET_SEARCH_PRODUCTS,
    products
  }
}

export function setSearchKeyword(keyword) {
  return {
    type: actionTypes.SET_SEARCH_KEYWORD,
    keyword
  }
}

export function searchProducts(keyword) {
  return dispatch => {
    return axios.get(`/administrate/api/products/search`, {params: {keyword}}).then((response)=>{
      const products = Immutable.fromJS(response.data.products)
      dispatch(setSearchProducts(products));
    })
  }
}

