import axios from '../../utils/axios';
import Immutable from 'immutable';

import actionTypes from '../constants';

export function hello() {
  return {
    type: actionTypes.HELLO
  }
}
