import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS([]);

export default function appReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.SET_PRODUCTS:
      return action.products;
    default: return state
  }
}
