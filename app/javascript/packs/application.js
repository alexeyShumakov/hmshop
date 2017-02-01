import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './web/store/store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './web/containers/App';
import Home from './web/components/Home';
import Categories from './web/components/Categories';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/categories/:id' component={Categories}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
