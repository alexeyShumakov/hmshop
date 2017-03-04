import Immutable from 'immutable';
import actionTypes from '../constants';

const initialState = Immutable.fromJS({
  total_count: 0,
  line_items: {
    product: {}
  }
})

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_CART:
      return action.cart

    default: return state
  }
}
