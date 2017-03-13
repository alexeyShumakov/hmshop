import axios from 'axios';
import Immutable from 'immutable';

import actionTypes from '../constants';

export function setPostLoading(isLoading) {
  return {
    type: actionTypes.SET_POST_LOADING,
    isLoading
  }

}

export function setPosts(posts) {
  return {
    type: actionTypes.SET_POSTS,
    posts
  }
}

export function setPost(post) {
  return {
    type: actionTypes.SET_POST,
    post
  }
}


export function fetchPost(id) {
  return dispatch => {
    dispatch(setPostLoading(true));
    return axios.get(`/api/posts/${id}`).then(
      response => {
        let data = Immutable.fromJS(response.data.post);
        dispatch(setPost(data))
        dispatch(setPostLoading(false));
      }
    )
  }
}

export function fetchPosts() {
  return dispatch => {
    dispatch(setPostLoading(true));
    return axios.get(`/api/posts`).then(
      response => {
        let data = Immutable.fromJS(response.data.posts);
        dispatch(setPosts(data))
        dispatch(setPostLoading(false));
      }
    )
  }
}

