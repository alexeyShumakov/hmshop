import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  fromServer: false,
  isLoading: false,
  errors: {},
  posts: [],
  post: {
    title: '',
    preview: '',
    body: ''
  }
});

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_POSTS_FROM_SERVER:
      return state.set('fromServer', action.fromServer)
    case actionTypes.SET_POSTS:
      return state.set('posts', action.posts)
    case actionTypes.SET_POST:
      return state.set('post', action.post)
    case actionTypes.SET_POSTS_LOADING:
      return state.set('isLoading', action.isLoading)
    case actionTypes.SET_POST_ERRORS:
      return state.set('errors', action.errors)
    default: return state
  }
}
