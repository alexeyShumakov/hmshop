import axios from '../../utils/axios';
import Immutable from 'immutable';
import { browserHistory } from 'react-router';
import _ from 'lodash';

import store from '../store/store';
import actionTypes from '../constants';
import {showNotification} from './notifications';

function isFromServer() {
  return store.getState().getIn(['posts','fromServer']);
}

const emptyPost = Immutable.Map({ title: '', preview: '', body: ''});

export function setPost(post) {
  return {
    type: actionTypes.SET_POST,
    post
  }
}
export function resetPostData() {
  return dispatch => {
    dispatch(setPost(emptyPost));
    dispatch(setPostErrors(Immutable.Map({})));
  }
}

export function setPostErrors(errors) {
  return {
    type: actionTypes.SET_POST_ERRORS,
    errors
  }
}

export function setPostsLoading(isLoading) {
  return {
    type: actionTypes.SET_POSTS_LOADING,
    isLoading
  }
}

export function setPostsFromServer(fromServer) {
  return {
    type: actionTypes.SET_POSTS_FROM_SERVER,
    fromServer
  }
}

export function setPosts(posts) {
  return {
    type: actionTypes.SET_POSTS,
    posts
  }
}

export function updatePost(post) {
  const id = post.get('id');
  let formData = new FormData();
  formData.append('post[title]', post.get('title'))
  formData.append('post[preview]', post.get('preview'))
  formData.append('post[body]', post.get('body'))
  if(!_.isEqual(post.get('cover'), undefined))
    formData.append('post[cover]', post.get('cover'))

  return dispatch => {
    dispatch(setPostsLoading(true));
    return axios.put(`/administrate/api/posts/${id}`, formData).then((response)=>{
      dispatch(setPostsLoading(false));
      dispatch(showNotification('Новость успешно обновленa.'));
      browserHistory.push(`/administrate/posts/${id}`);
    }, error => {
      const errors = Immutable.fromJS(error.response.data)
      dispatch(setPostErrors(errors));
    })
  }
}

export function createPost(post) {
  let formData = new FormData();
  formData.append('post[title]', post.get('title'))
  formData.append('post[preview]', post.get('preview'))
  formData.append('post[body]', post.get('body'))
  if(!_.isEqual(post.get('cover'), undefined))
    formData.append('post[cover]', post.get('cover'))

  return dispatch => {
    dispatch(setPostsLoading(true));
    return axios.post(`/administrate/api/posts`, formData).then((response)=>{
      browserHistory.push('/administrate/posts');
      dispatch(showNotification('Новость успешно созданa.'));
      dispatch(setPostsLoading(false));
    }, error => {
      const errors = Immutable.fromJS(error.response.data)
      dispatch(setPostErrors(errors));
    })
  }
}

export function destroyPost(id) {
  return dispatch => {
    dispatch(setPostsLoading(true));
    return axios.delete(`/administrate/api/posts/${id}`).then((response)=>{
      browserHistory.push('/administrate/posts');
      dispatch(showNotification('Новость успешно удаленa.'));
      dispatch(setPostsLoading(false));
    })
  }
}

export function fetchPost(id) {
  if(isFromServer())
    return dispatch => { dispatch(setPostsFromServer(false)) }

  return dispatch => {
    dispatch(setPostsLoading(true));
    return axios.get(`/administrate/api/posts/${id}`).then((response)=>{
      const post = Immutable.fromJS(response.data.post)
      dispatch(setPost(post));
      dispatch(setPostsLoading(false));
    })
  }
}

export function fetchPosts() {
  if(isFromServer())
    return dispatch => { dispatch(setPostsFromServer(false)) }

  return dispatch => {
    dispatch(setPostsLoading(true));
    return axios.get(`/administrate/api/posts`).then((response)=>{
      const posts = Immutable.fromJS(response.data.posts)
      dispatch(setPosts(posts));
      dispatch(setPostsLoading(false));
    })
  }
}

