import axios from '../../utils/axios';
import Immutable from 'immutable';
import { browserHistory } from 'react-router';
import _ from 'lodash';

import store from '../store/store';
import actionTypes from '../constants';
import {showNotification} from './notifications';

function isFromServer() {
  return store.getState().getIn(['products','fromServer']);
}

const emptyProduct = Immutable.fromJS({ price: 0, title: '', description: '', pictures: []});

export function setProduct(product) {
  return {
    type: actionTypes.SET_PRODUCT,
    product
  }
}
export function resetProductsData() {
  return dispatch => {
    dispatch(setProduct(emptyProduct));
    dispatch(setProductErrors(Immutable.Map({})));
  }
}

export function setProductErrors(errors) {
  return {
    type: actionTypes.SET_PRODUCT_ERRORS,
    errors
  }
}

export function setProductsLoading(isLoading) {
  return {
    type: actionTypes.SET_PRODUCTS_LOADING,
    isLoading
  }
}

export function setProductsFromServer(fromServer) {
  return {
    type: actionTypes.SET_PRODUCTS_FROM_SERVER,
    fromServer
  }
}

export function setProducts(products) {
  return {
    type: actionTypes.SET_PRODUCTS,
    products
  }
}

export function updateProduct(product) {
  const id = product.get('id');
  const pictures = product.get('pictures');
  let formData = new FormData();
  formData.append('product[title]', product.get('title'))
  formData.append('product[price]', product.get('price'))
  formData.append('product[for_example]', product.get('for_example'))
  formData.append('product[description]', product.get('description'))
  formData.append('product[category_id]', product.getIn(['category','id']));
  pictures && pictures.forEach((pic)=> {
    formData.append('picture_ids[]', pic.get('id'))
  })

  return dispatch => {
    dispatch(setProductsLoading(true));
    return axios.put(`/administrate/api/products/${id}`, formData).then((response)=>{
      dispatch(setProductsLoading(false));
      dispatch(showNotification('Продукт успешно обновлен.'));
      resetProductsData();
      browserHistory.push(`/administrate/products/${id}`);
    }, error => {
      const errors = Immutable.fromJS(error.response.data)
      dispatch(setProductErrors(errors));
    })
  }
}

export function createProduct(product) {
  const id = product.get('id');
  const pictures = product.get('pictures');
  let formData = new FormData();
  formData.append('product[title]', product.get('title'))
  formData.append('product[price]', product.get('price'))
  formData.append('product[for_example]', product.get('for_example'))
  formData.append('product[description]', product.get('description'))
  formData.append('product[category_id]', product.getIn(['category','id']));
  pictures && pictures.forEach((pic)=> {
    formData.append('picture_ids[]', pic.get('id'))
  })

  return dispatch => {
    dispatch(setProductsLoading(true));
    return axios.post(`/administrate/api/products`, formData).then((response)=>{
      dispatch(showNotification('Продукт успешно создан.'));
      dispatch(setProductsLoading(false));
      resetProductsData();
      browserHistory.push(`/administrate/products`);
    }, error => {
      const errors = Immutable.fromJS(error.response.data)
      dispatch(setProductErrors(errors));
    })
  }
}

export function destroyProduct(id) {
  return dispatch => {
    dispatch(setProductsLoading(true));
    return axios.delete(`/administrate/api/products/${id}`).then((response)=>{
      browserHistory.push('/administrate/products');
      dispatch(showNotification('Продукт успешно удален.'));
      dispatch(setProductsLoading(false));
    })
  }
}

export function fetchProduct(id) {
  if(isFromServer())
    return dispatch => { dispatch(setProductsFromServer(false)) }

  return dispatch => {
    dispatch(setProductsLoading(true));
    return axios.get(`/administrate/api/products/${id}`).then((response)=>{
      const product = Immutable.fromJS(response.data.product)
      dispatch(setProduct(product));
      dispatch(setProductsLoading(false));
    })
  }
}

export function fetchProducts() {
  if(isFromServer())
    return dispatch => { dispatch(setProductsFromServer(false)) }

  return dispatch => {
    dispatch(setProductsLoading(true));
    return axios.get(`/administrate/api/products`).then((response)=>{
      const products = Immutable.fromJS(response.data.products)
      dispatch(setProducts(products));
      dispatch(setProductsLoading(false));
    })
  }
}

