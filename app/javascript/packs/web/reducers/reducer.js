import Immutable from 'immutable';
import actionTypes from '../constants';
export const initialState = Immutable.fromJS({
  root_category_id: 0,
  category: {
    id: 1,
    title: ''
  },
  products: [],
  modalProduct: {
    isOpen: false,
    product: {
    }
  }
})

export function appReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.SET_CATEGORY:
      return state.set('category', action.category);
    case actionTypes.SET_PRODUCTS:
      return state.set('products', action.products);
    case actionTypes.SET_ROOT_CATEGORY_ID:
      return state.set('root_category_id', action.id)

    case actionTypes.SET_MODAL_PRODUCT_STATE:
      return state.setIn(['modalProduct', 'isOpen'], action.modalProductState )
    case actionTypes.SET_MODAL_PRODUCT:
      return state.setIn(['modalProduct', 'product'], action.modalProduct )
    default: return state
  }
}
