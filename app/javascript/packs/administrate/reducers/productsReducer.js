import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  isLoading: false,
  fromServer: false,
  errors: {},
  products: [],
  product: {
    title: '',
    price: 0,
    description: '',
    pictures: []
  }
});

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_PRODUCTS_FROM_SERVER:
      return state.set('fromServer', action.fromServer)
    case actionTypes.SET_PRODUCTS:
      return state.set('products', action.products)
    case actionTypes.SET_PRODUCT:
      return state.set('product', action.product)
    case actionTypes.SET_PRODUCTS_LOADING:
      return state.set('isLoading', action.isLoading)
    case actionTypes.SET_PRODUCT_ERRORS:
      return state.set('errors', action.errors)
    default: return state
  }
}
