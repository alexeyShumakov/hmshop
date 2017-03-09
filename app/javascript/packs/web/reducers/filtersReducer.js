import Immutable from 'immutable';
import actionTypes from '../constants';
const initialState = Immutable.fromJS({
  sortFilter: {
    currentValue: 'priceup',
    items: [
      { title: 'популярные', value: 'popular' },
      { title: 'сначала дорогие', value: 'pricedown' },
      { title: 'сначала дешевые', value: 'priceup' },
    ]
  },
})

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_FILTERS:
      return action.filters;
    default: return state
  }
}
