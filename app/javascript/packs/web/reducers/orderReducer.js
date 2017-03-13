import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  isLoading: false,
  order: {}
})

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_ORDER:
      return state.set('order', action.order);
    case actionTypes.SET_ORDER_LOADING:
      return state.set('isLoading', action.isLoading)
    default: return state
  }
}
