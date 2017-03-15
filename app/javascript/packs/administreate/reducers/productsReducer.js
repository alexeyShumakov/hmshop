import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  hello: 'hi'
});

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.HELLO:
      let hi = `${state.get('hello')}-i=`;
      return state.set('hello', hi);
    default: return state
  }
}
