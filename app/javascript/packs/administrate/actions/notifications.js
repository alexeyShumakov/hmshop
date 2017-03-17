import axios from '../../utils/axios';
import actionTypes from '../constants';

export function showNotification(text) {
  return {
    type: actionTypes.SHOW_NOTIFICATION,
    text
  }
}

export function hideNotification() {
  return {
    type: actionTypes.HIDE_NOTIFICATION
  }
}
