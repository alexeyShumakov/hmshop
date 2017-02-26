import Immutable from 'immutable';
import actionTypes from '../constants';
export const initialState = Immutable.fromJS({
  root_category_id: 0,
  category: {
    id: 1,
    title: ''
  },
  products: []
})

export function appReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.SET_CATEGORY:
      return state.set('category', action.category);
    case actionTypes.SET_PRODUCTS:
      return state.set('products', action.products);
    case actionTypes.SET_ROOT_CATEGORY_ID:
      return state.set('root_category_id', action.id)
    default: return state
  }
}
