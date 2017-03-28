import axios from '../../utils/axios';
import Immutable from 'immutable';
import { browserHistory } from 'react-router';
import _ from 'lodash';

import store from '../store/store';
import actionTypes from '../constants';
import {showNotification} from './notifications';

const emptyShop = Immutable.Map({});

export function setShop(shop) {
  return {
    type: actionTypes.SET_SHOP,
    shop
  }
}
export function resetShopData() {
  return dispatch => {
    dispatch(setShop(emptyShop));
    dispatch(setShopErrors(Immutable.Map({})));
  }
}

export function setShopErrors(errors) {
  return {
    type: actionTypes.SET_SHOP_ERRORS,
    errors
  }
}

export function setShopLoading(isLoading) {
  return {
    type: actionTypes.SET_SHOP_LOADING,
    isLoading
  }
}

export function updateShop(shop, loading=true) {
  let formData = new FormData();
  formData.append('shop[card_number]', shop.get('card_number'))
  formData.append('shop[title]', shop.get('title'))
  formData.append('shop[email]', shop.get('email'))
  formData.append('shop[phone]', shop.get('phone'))
  if(!_.isEqual(shop.get('left_logo'), undefined))
    formData.append('shop[left_logo]', shop.get('left_logo'))

  return dispatch => {
    dispatch(setShopLoading(loading));
    return axios.put(`/administrate/api/shop`, formData).then((response)=>{
      dispatch(setShopLoading(false));
      dispatch(showNotification('Данные магазина успешно обновлены.'));
      browserHistory.push(`/administrate/shop`);
    }, error => {
      const errors = Immutable.fromJS(error.response.data)
      dispatch(setShopErrors(errors));
      dispatch(setShopLoading(false));
    })
  }
}

export function fetchShop() {
  return dispatch => {
    dispatch(setShopLoading(true));
    return axios.get(`/administrate/api/shop`).then((response)=>{
      const shop = Immutable.fromJS(response.data.shop)
      dispatch(setShop(shop));
      dispatch(setShopLoading(false));
    })
  }
}
