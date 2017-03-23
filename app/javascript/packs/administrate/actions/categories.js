import axios from '../../utils/axios';
import Immutable from 'immutable';
import { browserHistory } from 'react-router';
import _ from 'lodash';

import store from '../store/store';
import actionTypes from '../constants';
import {showNotification} from './notifications';

function isFromServer() {
  return store.getState().getIn(['categories','fromServer']);
}

const emptyCategory = Immutable.fromJS({ title: '', parent: null});

export function setCategory(category) {
  return {
    type: actionTypes.SET_CATEGORY,
    category
  }
}
export function resetCategoriesData() {
  return dispatch => {
    dispatch(setCategory(emptyCategory));
    dispatch(setCategoryErrors(Immutable.Map({})));
  }
}

export function setCategoryErrors(errors) {
  return {
    type: actionTypes.SET_CATEGORY_ERRORS,
    errors
  }
}

export function setCategoriesLoading(isLoading) {
  return {
    type: actionTypes.SET_CATEGORIES_LOADING,
    isLoading
  }
}

export function setCategoriesFromServer(fromServer) {
  return {
    type: actionTypes.SET_CATEGORIES_FROM_SERVER,
    fromServer
  }
}

export function setCategories(categories) {
  return {
    type: actionTypes.SET_CATEGORIES,
    categories
  }
}

export function updateCategory(category) {
  const id = category.get('id');
  let formData = new FormData();
  formData.append('category[title]', category.get('title'))
  formData.append('category[parent_id]', category.getIn(['parent', 'id']))
  if(!_.isEqual(category.get('icon'), undefined))
    formData.append('category[icon]', category.get('icon'))

  return dispatch => {
    dispatch(setCategoriesLoading(true));
    return axios.put(`/administrate/api/categories/${id}`, formData).then((response)=>{
      dispatch(showNotification('Категория успешно обновленa.'));
      browserHistory.push(`/administrate/categories/${id}`);
      dispatch(setCategoriesLoading(false));
    }, error => {
      const errors = Immutable.fromJS(error.response.data)
      dispatch(setCategoryErrors(errors));
    })
  }
}

export function createCategory(category) {
  let formData = new FormData();
  formData.append('category[title]', category.get('title'))
  formData.append('category[parent_id]', category.getIn(['parent', 'id']))
  if(!_.isEqual(category.get('icon'), undefined))
    formData.append('category[icon]', category.get('icon'))

  return dispatch => {
    dispatch(setCategoriesLoading(true));
    return axios.post(`/administrate/api/categories`, formData).then((response)=>{
      browserHistory.push('/administrate/categories');
      dispatch(showNotification('Категория успешно созданa.'));
      dispatch(setCategoriesLoading(false));
    }, error => {
      const errors = Immutable.fromJS(error.response.data)
      dispatch(setCategoryErrors(errors));
    })
  }
}

export function destroyCategory(id) {
  return dispatch => {
    dispatch(setCategoriesLoading(true));
    return axios.delete(`/administrate/api/categories/${id}`).then((response)=>{
      browserHistory.push('/administrate/categories');
      dispatch(showNotification('Категория успешно удаленa.'));
      dispatch(setCategoriesLoading(false));
    })
  }
}

export function fetchCategory(id) {
  if(isFromServer())
    return dispatch => { dispatch(setCategoriesFromServer(false)) }

  return dispatch => {
    dispatch(setCategoriesLoading(true));
    return axios.get(`/administrate/api/categories/${id}`).then((response)=>{
      const category = Immutable.fromJS(response.data.category)
      dispatch(setCategory(category));
      dispatch(setCategoriesLoading(false));
    })
  }
}

export function fetchCategories() {
  if(isFromServer())
    return dispatch => { dispatch(setCategoriesFromServer(false)) }

  return dispatch => {
    dispatch(setCategoriesLoading(true));
    return axios.get(`/administrate/api/categories`).then((response)=>{
      const categories = Immutable.fromJS(response.data.categories)
      dispatch(setCategories(categories));
      dispatch(setCategoriesLoading(false));
    })
  }
}

