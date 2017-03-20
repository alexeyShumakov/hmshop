import React from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './administrate/store/store';
import * as appActions from './administrate/actions';

import App from './administrate/containers/App'
import BannerIndex from './administrate/containers/banners/index';
import BannerShow from './administrate/containers/banners/show';
import BannerNew from './administrate/containers/banners/new';
import BannerEdit from './administrate/containers/banners/edit';

import ProductIndex from './administrate/containers/products/index';
import ProductShow from './administrate/containers/products/show';
import ProductEdit from './administrate/containers/products/edit';
import ProductNew from './administrate/containers/products/new';

import CategoryIndex  from './administrate/containers/categories/index';
import CategoryShow from './administrate/containers/categories/show';
import CategoryEdit from './administrate/containers/categories/edit';
import CategoryNew from './administrate/containers/categories/new';

const actions = bindActionCreators(appActions, store.dispatch);
const fetchBanner  =  (router) => {actions.fetchBanner(router.params.id)};
const fetchProduct =  (router) => {actions.fetchProduct(router.params.id)};
const fetchCategory = (router) => {actions.fetchCategory(router.params.id)};
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/administrate' component={App} >
        <Route path='/administrate/banners' component={BannerIndex} onEnter={actions.fetchBanners}/>
        <Route path='/administrate/banners/new' component={BannerNew} onLeave={actions.resetBannerData}/>
        <Route path='/administrate/banners/:id' component={BannerShow} onEnter={fetchBanner} onLeave={actions.resetBannerData}/>
        <Route path='/administrate/banners/:id/edit' component={BannerEdit} onEnter={fetchBanner} onLeave={actions.resetBannerData}/>

        <Route path='/administrate/products' component={ProductIndex} onEnter={actions.fetchProducts}/>
        <Route path='/administrate/products/new' component={ProductNew} onLeave={actions.resetProductsData}/>
        <Route path='/administrate/products/:id' component={ProductShow} onEnter={fetchProduct} onLeave={actions.resetProductsData}/>
        <Route path='/administrate/products/:id/edit' component={ProductEdit} onEnter={fetchProduct} onLeave={actions.resetProductsData}/>

        <Route path='/administrate/categories/new' component={CategoryNew} onLeave={actions.resetCategoriesData}/>
        <Route path='/administrate/categories' component={CategoryIndex} onEnter={actions.fetchCategories}/>
        <Route path='/administrate/categories/:id' component={CategoryShow} onEnter={fetchCategory} onLeave={actions.resetCategoriesData}/>
        <Route path='/administrate/categories/:id/edit' component={CategoryEdit} onEnter={fetchCategory} onLeave={actions.resetCategoriesData}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
