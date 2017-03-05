import Immutable from 'immutable';
import actionTypes from '../constants';

const initialState = Immutable.fromJS({
  currentPosition: 0,
  cart: {
    total_count: 0,
    line_items: []
  }
})

export default (state = initialState, action) => {
  let currentPosition = state.get('currentPosition')
  switch(action.type) {
    case actionTypes.SET_CART:
      return state.set('cart', action.cart)
    case actionTypes.CART_INC_POSITION:
      if (currentPosition < state.getIn(['cart', 'line_items']).size - 3) {
        currentPosition = currentPosition + 1;
      }
      return state.set('currentPosition', currentPosition)
    case actionTypes.CART_DEC_POSITION:
      if (currentPosition > 0) {
        currentPosition = currentPosition - 1;
      }
      return state.set('currentPosition', currentPosition)
    case actionTypes.CART_RESET_POSITION:
      return state.set('currentPosition', 0)

    default: return state
  }
}
