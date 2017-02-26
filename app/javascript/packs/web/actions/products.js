import actionTypes from '../constants';

export function setProducts(products) {
  return {
    type: actionTypes.SET_PRODUCTS,
    products
  }
}

export function setModalProductState(modalProductState) {
  return {
    type: actionTypes.SET_MODAL_PRODUCT_STATE,
    modalProductState
  }
}
