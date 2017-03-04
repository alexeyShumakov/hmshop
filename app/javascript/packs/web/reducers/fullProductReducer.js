import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  product: {},
  isLoading: false,
  currentPicture: '/pic.png'
})

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_FULL_PRODUCT:
      return state.set('product', action.product);
    case actionTypes.SET_LOADING_FULL_PRODUCT:
      return state.set('isLoading', action.isLoading)
    case actionTypes.SET_FULL_CURRENT_PICTURE:
      return state.set('currentPicture', action.url)
    default: return state
  }
}
