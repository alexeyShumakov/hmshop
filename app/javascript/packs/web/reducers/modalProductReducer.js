import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  isOpen: false,
  isLoading: false,
  currentPicture: '/img.png',
  product: {
    pictures: []
  }
})

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_MODAL_PRODUCT_STATE:
      return state.set('isOpen', action.modalProductState )
    case actionTypes.SET_MODAL_PRODUCT:
      return state.set('product', action.modalProduct )
    case actionTypes.SET_LOADING_MODAL_PRODUCT:
      return state.set('isLoading', action.isLoading)
    case actionTypes.SET_MODAL_CURRENT_PICTURE:
      return state.set('currentPicture', action.url)
    default: return state
  }
}
