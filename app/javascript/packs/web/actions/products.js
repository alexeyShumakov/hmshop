import axios from 'axios';
import Immutable from 'immutable';

import actionTypes from '../constants';
import {setHistory} from './history';

export function setProducts(products) {
  return {
    type: actionTypes.SET_PRODUCTS,
    products
  }
}

export function setLoadingModalProduct(isLoading) {
  return {
    type: actionTypes.SET_LOADING_MODAL_PRODUCT,
    isLoading
  }
}
export function setModalProduct(modalProduct) {
  return {
    type: actionTypes.SET_MODAL_PRODUCT,
    modalProduct
  }
}

export function setModalCurrentPicture(url) {
  return {
    type: actionTypes.SET_MODAL_CURRENT_PICTURE,
    url
  }
}
export function fetchProduct(id) {
  return dispatch => {
    dispatch(setLoadingModalProduct(true));
    return axios.get(`/api/products/${id}`).then(
      response => {
        let product = Immutable.fromJS(response.data.fullProduct);
        let history = Immutable.fromJS(response.data.history);
        dispatch(setHistory(history));
        dispatch(setModalProduct(product.get('product')))
        dispatch(setLoadingModalProduct(false));
        dispatch(setModalCurrentPicture(product.get('currentPicture')));
      }
    )
  }

}


export function setModalProductState(modalProductState) {
  return {
    type: actionTypes.SET_MODAL_PRODUCT_STATE,
    modalProductState
  }
}
