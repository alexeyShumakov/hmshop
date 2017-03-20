import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  isLoading: false,
  fromServer: false,
  errors: {},
  orders: [],
  order: {
    name: '',
    email: '',
    phone: '',
    address: '',
    total_price: 0,
    line_items: []
  }
});

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_ORDERS_FROM_SERVER:
      return state.set('fromServer', action.fromServer)
    case actionTypes.SET_ORDERS:
      return state.set('orders', action.orders)
    case actionTypes.SET_ORDER:
      return state.set('order', action.order)
    case actionTypes.SET_ORDERS_LOADING:
      return state.set('isLoading', action.isLoading)
    case actionTypes.SET_ORDER_ERRORS:
      return state.set('errors', action.errors)
    default: return state
  }
}
