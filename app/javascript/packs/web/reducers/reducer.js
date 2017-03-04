import Immutable from 'immutable';
import actionTypes from '../constants';

import cart from './cartReducer';
import modalProduct from './modalProductReducer';
import fullProduct from './fullProductReducer';
import products from './productsReducer';
import category from './categoryReducer'

const reducers = Immutable.Map({ cart, modalProduct, fullProduct, products, category });
import initialState from '../state/initialState';

export default (state = initialState, action) => {
  reducers.forEach((reducer, key) => {
    state = state.set(key, reducer(state.get(key), action))
  })
  return state
}
