import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './administrate/store/store';
import * as appActions from './administrate/actions';

import App from './administrate/containers/App'
import BannerIndex from './administrate/containers/banners/index';
import BannerShow from './administrate/containers/banners/show';
import BannerNew from './administrate/containers/banners/new';
import BannerEdit from './administrate/containers/banners/edit';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/administrate' component={App} >
        <Route path='/administrate/banners'
          onEnter={()=> {store.dispatch(appActions.fetchBanners())}}
          component={BannerIndex}/>
        <Route path='/administrate/banners/new'
          onLeave={() =>{store.dispatch(appActions.resetBannerData())}}
          component={BannerNew}
        />
        <Route path='/administrate/banners/:id'
          onEnter={(router)=> {store.dispatch(appActions.fetchBanner(router.params.id))}}
          onLeave={() =>{store.dispatch(appActions.resetBannerData())}}
          component={BannerShow}/>
        <Route path='/administrate/banners/:id/edit'
          onEnter={(router)=> {store.dispatch(appActions.fetchBanner(router.params.id))}}
          onLeave={() =>{store.dispatch(appActions.resetBannerData())}}
          component={BannerEdit}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
