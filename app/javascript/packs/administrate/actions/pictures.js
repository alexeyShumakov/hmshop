import axios from '../../utils/axios';
import actionTypes from '../constants';
import Immutable from 'immutable';
import {showNotification} from './notifications';

export function createPicture(picture) {
  let formData = new FormData();
  if(!_.isEqual(picture.get('image'), undefined))
    formData.append('picture[image]', picture.get('image'))

  return dispatch => {
    dispatch(setPicturesLoading(true));
    return axios.post(`/administrate/api/pictures`, formData).then((response)=>{
      dispatch(showNotification('Изображение успешно загружено.'));
      dispatch(setPicturesLoading(false));
      return Immutable.fromJS(response.data.picture);
    })
  }
}

export function setPicturesLoading(isLoading) {
  return {
    type: actionTypes.SET_PICTURES_LOADING,
    isLoading
  }
}
