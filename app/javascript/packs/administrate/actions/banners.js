import axios from '../../utils/axios';
import Immutable from 'immutable';
import { browserHistory } from 'react-router';
import _ from 'lodash';

import store from '../store/store';
import actionTypes from '../constants';

function isFromServer() {
  return store.getState().getIn(['banners','fromServer']);
}

const emptyBanner = Immutable.Map({ url: ''});

export function setBanner(banner) {
  return {
    type: actionTypes.SET_BANNER,
    banner
  }
}
export function resetBannerData() {
  return dispatch => {
    dispatch(setBanner(emptyBanner));
    dispatch(setBannerErrors(Immutable.Map({})));
  }
}

export function setBannerErrors(errors) {
  return {
    type: actionTypes.SET_BANNER_ERRORS,
    errors
  }
}

export function setBannersLoading(isLoading) {
  return {
    type: actionTypes.SET_BANNERS_LOADING,
    isLoading
  }
}

export function setBannersFromServer(fromServer) {
  return {
    type: actionTypes.SET_BANNERS_FROM_SERVER,
    fromServer
  }
}

export function setBanners(banners) {
  return {
    type: actionTypes.SET_BANNERS,
    banners
  }
}

export function updateBanner(banner) {
  const id = banner.get('id');
  let formData = new FormData();
  formData.append('banner[url]', banner.get('url'))
  if(!_.isEqual(banner.get('image'), undefined))
    formData.append('banner[image]', banner.get('image'))

  return dispatch => {
    dispatch(setBannersLoading(true));
    return axios.put(`/administrate/api/banners/${id}`, formData).then((response)=>{
      dispatch(setBannersLoading(false));
      browserHistory.push(`/administrate/banners/${id}`);
    }, error => {
      const errors = Immutable.fromJS(error.response.data)
      dispatch(setBannerErrors(errors));
    })
  }
}

export function createBanner(banner) {
  let formData = new FormData();
  formData.append('banner[url]', banner.get('url'))
  if(!_.isEqual(banner.get('image'), undefined))
    formData.append('banner[image]', banner.get('image'))

  return dispatch => {
    dispatch(setBannersLoading(true));
    return axios.post(`/administrate/api/banners`, formData).then((response)=>{
      browserHistory.push('/administrate/banners');
      dispatch(setBannersLoading(false));
    }, error => {
      const errors = Immutable.fromJS(error.response.data)
      dispatch(setBannerErrors(errors));
    })
  }
}

export function destroyBanner(id) {
  return dispatch => {
    dispatch(setBannersLoading(true));
    return axios.delete(`/administrate/api/banners/${id}`).then((response)=>{
      browserHistory.push('/administrate/banners');
      dispatch(setBannersLoading(false));
    })
  }
}

export function fetchBanner(id) {
  if(isFromServer())
    return dispatch => { dispatch(setBannersFromServer(false)) }

  return dispatch => {
    dispatch(setBannersLoading(true));
    return axios.get(`/administrate/api/banners/${id}`).then((response)=>{
      const banner = Immutable.fromJS(response.data.banner)
      dispatch(setBanner(banner));
      dispatch(setBannersLoading(false));
    })
  }
}

export function fetchBanners() {
  if(isFromServer())
    return dispatch => { dispatch(setBannersFromServer(false)) }

  return dispatch => {
    dispatch(setBannersLoading(true));
    return axios.get(`/administrate/api/banners`).then((response)=>{
      const banners = Immutable.fromJS(response.data.banners)
      dispatch(setBanners(banners));
      dispatch(setBannersLoading(false));
    })
  }
}

