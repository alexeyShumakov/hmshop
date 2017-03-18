import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  isOpen: false
});

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.OPEN_MODAL:
      return state.set('isOpen', action.isOpen)
    default: return state
  }
}
