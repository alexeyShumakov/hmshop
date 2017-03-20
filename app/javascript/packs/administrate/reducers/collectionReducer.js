import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  fromServer: false,
  isLoading: false,
  errors: {},
  collections: [],
  collection: {
    title: '',
    description: '',
    products: []
  }
});

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_COLLECTIONS_FROM_SERVER:
      return state.set('fromServer', action.fromServer)
    case actionTypes.SET_COLLECTIONS:
      return state.set('collections', action.collections)
    case actionTypes.SET_COLLECTION:
      return state.set('collection', action.collection)
    case actionTypes.SET_COLLECTIONS_LOADING:
      return state.set('isLoading', action.isLoading)
    case actionTypes.SET_COLLECTION_ERRORS:
      return state.set('errors', action.errors)
    default: return state
  }
}
