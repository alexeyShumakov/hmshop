import Immutable from 'immutable';

import actionTypes from '../constants';
import products from './productsReducer';
import initialState from '../state/initialState';

const reducers = Immutable.Map({ products });

export default (state = initialState, action) => {
  reducers.forEach((reducer, key) => {
    state = state.set(key, reducer(state.get(key), action))
  })
  return state
}
