import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  isShow: false,
  text: ''
});

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SHOW_NOTIFICATION:
      return state.set('isShow', true).set('text', action.text)
    case actionTypes.HIDE_NOTIFICATION:
      return state.set('isShow', false)
    default: return state
  }
}
