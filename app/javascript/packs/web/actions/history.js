import Immutable from 'immutable';
import actionTypes from '../constants';

export function setHistory(products) {
  return {
    type: actionTypes.SET_HISTORY,
    products
  }
}

