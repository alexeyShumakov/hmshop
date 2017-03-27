import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  isLoading: false,
  errors: {},
  shop: {}
});

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_SHOP:
      return state.set('shop', action.shop)
    case actionTypes.SET_SHOP_LOADING:
      return state.set('isLoading', action.isLoading)
    case actionTypes.SET_SHOP_ERRORS:
      return state.set('errors', action.errors)
    default: return state
  }
}
