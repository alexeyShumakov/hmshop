import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  fromServer: false,
  isLoading: false,
  errors: {},
  categories: [],
  category: {
    title: ''
  }
});

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_CATEGORIES_FROM_SERVER:
      return state.set('fromServer', action.fromServer)
    case actionTypes.SET_CATEGORIES:
      return state.set('categories', action.categories)
    case actionTypes.SET_CATEGORY:
      return state.set('category', action.category)
    case actionTypes.SET_CATEGORIES_LOADING:
      return state.set('isLoading', action.isLoading)
    case actionTypes.SET_CATEGORY_ERRORS:
      return state.set('errors', action.errors)
    default: return state
  }
}
