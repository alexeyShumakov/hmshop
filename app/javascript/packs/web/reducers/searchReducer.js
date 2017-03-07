import Immutable from 'immutable';
import actionTypes from '../constants';

const initialState = Immutable.fromJS({
  keyword: '',
  products: []
})

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_SEARCH_KEYWORD:
      console.log(action)
      return state.set('keyword', action.keyword)
    case actionTypes.SET_SEARCH_PRODUCTS:
      return state.set('products', action.products)

    default: return state
  }
}
