import Immutable from 'immutable';
import actionTypes from '../constants';
export const initialState = Immutable.fromJS({
  category: {
    id: 1,
    title: 'title'
  },
  products: []
})

export function appReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.SET_CATEGORY:
      return state.set('category', action.category);
    case actionTypes.SET_PRODUCTS:
      return state.set('products', action.products);
    default: return state
  }
}
