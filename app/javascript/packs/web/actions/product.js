import axios from 'axios';
import Immutable from 'immutable';

import actionTypes from '../constants';

export function setFullProduct(product) {
  return {
    type: actionTypes.SET_FULL_PRODUCT,
    product
  }
}

export function setLoadingFullProduct(isLoading) {
  return {
    type: actionTypes.SET_LOADING_FULL_PRODUCT,
    isLoading
  }
}

export function setFullCurrentPicture(url) {
  return {
    type: actionTypes.SET_FULL_CURRENT_PICTURE,
    url
  }
}
export function fetchFullProduct(id) {
  return dispatch => {
    dispatch(setLoadingFullProduct(true));
    return axios.get(`/api/products/${id}`).then(
      response => {
        let product = Immutable.fromJS(response.data.product);
        dispatch(setFullProduct(product))
        dispatch(setFullCurrentPicture(product.getIn(['pictures', 0, 'medium_img'])));
        dispatch(setLoadingFullProduct(false));
      }
    )
  }
}
