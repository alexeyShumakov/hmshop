import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS([]);

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.PUSH_PRODUCTS:
      return state.concat(action.products);
    case actionTypes.SET_PRODUCTS:
      return action.products;
    default: return state
  }
}
