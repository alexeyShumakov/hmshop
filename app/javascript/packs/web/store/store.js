import { createStore, applyMiddleware } from 'redux';
import { appReducer } from '../reducers/reducer';
import thunk from 'redux-thunk';

let middlewares = [thunk];
if (process.env.NODE_ENV === `development`) {
  const createLogger = require(`redux-logger`);
  const logger = createLogger();
  middlewares.push(logger);
}
const store = createStore(appReducer, $sharedVariables, applyMiddleware(...middlewares) )

export default store;
