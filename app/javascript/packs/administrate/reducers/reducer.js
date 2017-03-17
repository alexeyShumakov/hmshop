import Immutable from 'immutable';

import actionTypes from '../constants';
import initialState from '../state/initialState';

import products from './productsReducer';
import banners from './bannersReucer';
import notifications from './notificationsReducer';

const reducers = Immutable.Map({ products, banners, notifications });

export default (state = initialState, action) => {
  reducers.forEach((reducer, key) => {
    state = state.set(key, reducer(state.get(key), action))
  })
  return state
}
