import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  isLoading: false
});

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_PICTURES_LOADING:
      return state.set('isLoading', action.isLoading)
    default: return state
  }
}
