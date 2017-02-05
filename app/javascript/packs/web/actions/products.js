import actionTypes from '../constants';

export function setProducts(products) {
  return {
    type: actionTypes.SET_PRODUCTS,
    products
  }
}
