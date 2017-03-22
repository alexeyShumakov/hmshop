import { createStore, applyMiddleware } from 'redux';
import appReducer from '../reducers/reducer';
import initialState from '../state/initialState';
import thunk from 'redux-thunk';
import Immutable, { fromJS } from 'immutable';

let middlewares = [thunk];
if (process.env.NODE_ENV === `development`) {
  const createLogger = require(`redux-logger`).default;
  const stateTransformer = (state) => {
    if(Immutable.Iterable.isIterable(state)) return state.toJS();
    else return state;
  }
  const logger = createLogger({stateTransformer});
  middlewares.push(logger);
}

let shared = (typeof $sharedVariables === 'undefined') ? {} : $sharedVariables;
let local = (typeof $localVariables === 'undefined') ? {} : $localVariables;
let state = initialState.mergeDeep(fromJS(shared)).mergeDeep(fromJS(local));

const store = createStore(appReducer, state, applyMiddleware(...middlewares) )

export default store;
