import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  errors: {},
  banners: [],
  banner: {
    link: ''
  }
});

export default (state = initialState, action) => {
  switch(action.type) {
    default: return state
  }
}
