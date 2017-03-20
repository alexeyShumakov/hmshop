import Immutable from 'immutable';

import actionTypes from '../constants';
import initialState from '../state/initialState';

import products from './productsReducer';
import banners from './bannersReucer';
import notifications from './notificationsReducer';
import modal from './modalReducer';
import categories from './categoriesReducer';
import pictures from './picturesReducer';
import collections from './collectionReducer';

const reducers = Immutable.Map({ collections, pictures, categories, modal, products, banners, notifications });

export default (state = initialState, action) => {
  reducers.forEach((reducer, key) => {
    state = state.set(key, reducer(state.get(key), action))
  })
  return state
}
