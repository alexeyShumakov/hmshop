import axios from '../../utils/axios';
import Immutable from 'immutable';
import { browserHistory } from 'react-router';
import _ from 'lodash';

import store from '../store/store';
import actionTypes from '../constants';
import {showNotification} from './notifications';

function isFromServer() {
  return store.getState().getIn(['collections','fromServer']);
}

const emptyCollection = Immutable.Map({ title: '', description: '', products: []});

export function setCollection(collection) {
  return {
    type: actionTypes.SET_COLLECTION,
    collection
  }
}
export function resetCollectionsData() {
  return dispatch => {
    dispatch(setCollection(emptyCollection));
    dispatch(setCollectionErrors(Immutable.Map({})));
  }
}

export function setCollectionErrors(errors) {
  return {
    type: actionTypes.SET_COLLECTION_ERRORS,
    errors
  }
}

export function setCollectionsLoading(isLoading) {
  return {
    type: actionTypes.SET_COLLECTIONS_LOADING,
    isLoading
  }
}

export function setCollectionsFromServer(fromServer) {
  return {
    type: actionTypes.SET_COLLECTIONS_FROM_SERVER,
    fromServer
  }
}

export function setCollections(collections) {
  return {
    type: actionTypes.SET_COLLECTIONS,
    collections
  }
}

export function updateCollection(collection) {
  const id = collection.get('id');
  const products = collection.get('products');
  let formData = new FormData();
  formData.append('collection[title]', collection.get('title'))
  formData.append('collection[description]', collection.get('description'))
  if(!_.isEqual(collection.get('cover'), undefined))
    formData.append('collection[cover]', collection.get('cover'))
  products && products.forEach((product)=> {
    formData.append('product_ids[]', product.get('id'))
  })

  return dispatch => {
    dispatch(setCollectionsLoading(true));
    return axios.put(`/administrate/api/collections/${id}`, formData).then((response)=>{
      dispatch(setCollectionsLoading(false));
      dispatch(showNotification('Набор успешно обновлен.'));
      browserHistory.push(`/administrate/collections/${id}`);
    }, error => {
      const errors = Immutable.fromJS(error.response.data)
      dispatch(setCollectionErrors(errors));
    })
  }
}

export function createCollection(collection) {
  const id = collection.get('id');
  const products = collection.get('products');
  let formData = new FormData();
  formData.append('collection[title]', collection.get('title'))
  formData.append('collection[description]', collection.get('description'))
  if(!_.isEqual(collection.get('cover'), undefined))
    formData.append('collection[cover]', collection.get('cover'))
  products && products.forEach((product)=> {
    formData.append('product_ids[]', product.get('id'))
  })

  return dispatch => {
    dispatch(setCollectionsLoading(true));
    return axios.post(`/administrate/api/collections`, formData).then((response)=>{
      browserHistory.push('/administrate/collections');
      dispatch(showNotification('Набор успешно создан.'));
      dispatch(setCollectionsLoading(false));
    }, error => {
      const errors = Immutable.fromJS(error.response.data)
      dispatch(setCollectionErrors(errors));
    })
  }
}

export function destroyCollection(id) {
  return dispatch => {
    dispatch(setCollectionsLoading(true));
    return axios.delete(`/administrate/api/collections/${id}`).then((response)=>{
      browserHistory.push('/administrate/collections');
      dispatch(showNotification('Набор успешно удален.'));
      dispatch(setCollectionsLoading(false));
    })
  }
}

export function fetchCollection(id) {
  if(isFromServer())
    return dispatch => { dispatch(setCollectionsFromServer(false)) }

  return dispatch => {
    dispatch(setCollectionsLoading(true));
    return axios.get(`/administrate/api/collections/${id}`).then((response)=>{
      const collection = Immutable.fromJS(response.data.collection)
      dispatch(setCollection(collection));
      dispatch(setCollectionsLoading(false));
    })
  }
}

export function fetchCollections() {
  if(isFromServer())
    return dispatch => { dispatch(setCollectionsFromServer(false)) }

  return dispatch => {
    dispatch(setCollectionsLoading(true));
    return axios.get(`/administrate/api/collections`).then((response)=>{
      const collections = Immutable.fromJS(response.data.collections)
      dispatch(setCollections(collections));
      dispatch(setCollectionsLoading(false));
    })
  }
}

