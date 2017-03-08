import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS([]);

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_HISTORY:
      return action.products
    default: return state
  }
}
