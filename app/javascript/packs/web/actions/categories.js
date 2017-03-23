import axios from 'axios';
import Immutable from 'immutable';

import actionTypes from '../constants';
import * as productActions from './products';
import {setFilters} from './filters';

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

export function infinityUploadCategory(id, params={}) {
  return dispatch => {
    let req = axios.get(`/api/categories/${id}`, {params});
    return req.then(
      response => {
        let data = Immutable.fromJS(response.data);
        let category = data.getIn(['category', 'category']);
        let products = data.get('products');
        dispatch(setCategory(category))
        dispatch(setRootCategoryId(category.get('root_category_id')))
        dispatch(productActions.pushProducts(products))
        dispatch(setFilters(data.get('filters')));
        return req;
      }
    )
  }
}
export function fetchCategory(id, params={}) {
  return dispatch => {
    dispatch(setCategoryLoading(true));
    return axios.get(`/api/categories/${id}`, {params}).then(
      response => {
        let data = Immutable.fromJS(response.data);
        let category = data.getIn(['category', 'category']);
        let products = data.get('products');
        dispatch(setCategory(category))
        dispatch(setRootCategoryId(category.get('root_category_id')))
        dispatch(productActions.setProducts(products))
        dispatch(setFilters(data.get('filters')));
        dispatch(setCategoryLoading(false));
      }
    )
  }
}

