import axios from 'axios';
import Immutable from 'immutable';

import actionTypes from '../constants';

export function setCollectionLoading(isLoading) {
  return {
    type: actionTypes.SET_COLLECTION_LOADING,
    isLoading
  }

}

export function setCollections(collections) {
  return {
    type: actionTypes.SET_COLLECTIONS,
    collections
  }
}

export function setCollection(collection) {
  return {
    type: actionTypes.SET_COLLECTION,
    collection
  }
}


export function fetchCollection(id) {
  return dispatch => {
    dispatch(setCollectionLoading(true));
    return axios.get(`/api/collections/${id}`).then(
      response => {
        let data = Immutable.fromJS(response.data.collection);
        dispatch(setCollection(data))
        dispatch(setCollectionLoading(false));
      }
    )
  }
}

export function fetchCollections() {
  return dispatch => {
    dispatch(setCollectionLoading(true));
    return axios.get(`/api/collections`).then(
      response => {
        let data = Immutable.fromJS(response.data.collections);
        dispatch(setCollections(data))
        dispatch(setCollectionLoading(false));
      }
    )
  }
}

