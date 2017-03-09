import Immutable from 'immutable';
import actionTypes from '../constants';

export function setFilters(filters) {
  return {
    type: actionTypes.SET_FILTERS,
    filters
  }
}

