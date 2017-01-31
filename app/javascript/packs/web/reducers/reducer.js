import actionTypes from '../constants';
const initialState = {
  isGood: 'YES!'
}

export function appReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.TEST:
      return Object.assign({}, state, {
        isGood: action.text
      })
    default: return state
  }
}
