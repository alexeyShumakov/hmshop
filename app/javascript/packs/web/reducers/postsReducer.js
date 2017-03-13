import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  isLoading: false,
  posts: [],
  post: {}
})

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_POST:
      return state.set('post', action.post);
    case actionTypes.SET_POSTS:
      return state.set('posts', action.posts);
    case actionTypes.SET_POST_LOADING:
      return state.set('isLoading', action.isLoading)
    default: return state
  }
}
