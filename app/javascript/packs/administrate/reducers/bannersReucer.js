import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  fromServer: false,
  isLoading: false,
  errors: {},
  banners: [],
  banner: {
    link: ''
  }
});

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_BANNERS_FROM_SERVER:
      return state.set('fromServer', action.fromServer)
    case actionTypes.SET_BANNERS:
      return state.set('banners', action.banners)
    case actionTypes.SET_BANNER:
      return state.set('banner', action.banner)
    case actionTypes.SET_BANNERS_LOADING:
      return state.set('isLoading', action.isLoading)
    default: return state
  }
}
