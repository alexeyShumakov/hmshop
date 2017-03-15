import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './administreate/store/store';
import * as appActions from './administreate/actions';

import App from './administreate/containers/App'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/administrate' component={App} >
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
