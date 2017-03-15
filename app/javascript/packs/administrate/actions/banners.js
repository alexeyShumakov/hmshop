import axios from '../../utils/axios';
import Immutable from 'immutable';

import actionTypes from '../constants';

export function setBanner(banner) {
  return {
    type: actionTypes.SET_BANNER,
    banner
  }
}

export function setBanners(banners) {
  return {
    type: actionTypes.SET_BANNERS,
    banners
  }
}
