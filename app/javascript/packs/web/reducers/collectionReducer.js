import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  isLoading: false,
  collections: [],
  collection: {}
})

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_COLLECTION:
      return state.set('collection', action.collection);
    case actionTypes.SET_COLLECTIONS:
      return state.set('collections', action.collections);
    case actionTypes.SET_COLLECTION_LOADING:
      return state.set('isLoading', action.isLoading)
    default: return state
  }
}
