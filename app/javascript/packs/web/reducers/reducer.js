import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  isGood: 'YES!'
})

export function appReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.TEST:
      return state.set('isGood', action.text)
    default: return state
  }
}
