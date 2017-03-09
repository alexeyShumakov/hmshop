import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  isLoading: false,
  root_category_id: 0,
  category: {
    ancestors: [],
    id: 1,
    title: ''
  }
})

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_CATEGORY:
      return state.set('category', action.category);
    case actionTypes.SET_ROOT_CATEGORY_ID:
      return state.set('root_category_id', action.id)
    case actionTypes.SET_CATEGORY_LOADING:
      return state.set('isLoading', action.isLoading)
    default: return state
  }
}
