import actionTypes from '../constants';


export function openModal(isOpen) {
  return {
    type: actionTypes.OPEN_MODAL,
    isOpen
  }
}
