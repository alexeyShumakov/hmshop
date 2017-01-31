import actionTypes from '../constants';

export function updateTest(text) {
  return {
    type: actionTypes.TEST,
    text: text
  }
}
