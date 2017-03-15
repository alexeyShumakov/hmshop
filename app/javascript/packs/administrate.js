import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './administrate/store/store';
import * as appActions from './administrate/actions';

import App from './administrate/containers/App'
import BannerIndex from './administrate/containers/banners/index';
import BannerShow from './administrate/containers/banners/show';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/administrate' component={App} >
        <Route path='/administrate/banners' component={BannerIndex}/>
        <Route path='/administrate/banners/:id' component={BannerShow}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
