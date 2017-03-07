import axios from 'axios';
import Immutable from 'immutable';

import actionTypes from '../constants';
import * as productActions from './products';

export function setCategoryLoading(isLoading) {
  return {
    type: actionTypes.SET_CATEGORY_LOADING,
    isLoading
  }

}
export function setCategory(category) {
  return {
    type: actionTypes.SET_CATEGORY,
    category
  }
}

export function setRootCategoryId(id) {
  return {
    type: actionTypes.SET_ROOT_CATEGORY_ID,
    id
  }
}

export function fetchCategory(id) {
  return dispatch => {
    dispatch(setCategoryLoading(true));
    return axios.get(`/api/categories/${id}`).then(
      response => {
        let data = Immutable.fromJS(response.data);
        let category = data.get('category').delete('products');
        let products = data.getIn(['category', 'products']);
        dispatch(setCategory(category))
        dispatch(setRootCategoryId(category.get('root_category_id')))
        dispatch(productActions.setProducts(products))
        dispatch(setCategoryLoading(false));
      }
    )
  }
}

