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

import ProductIndex from './administrate/containers/products/index';
import ProductShow from './administrate/containers/products/show';
import ProductEdit from './administrate/containers/products/edit';
import ProductNew from './administrate/containers/products/new';

import CategoryIndex  from './administrate/containers/categories/index';
import CategoryShow from './administrate/containers/categories/show';
import CategoryEdit from './administrate/containers/categories/edit';
import CategoryNew from './administrate/containers/categories/new';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/administrate' component={App} >
        <Route path='/administrate/banners'
          onEnter={()=> {store.dispatch(appActions.fetchBanners())}}
          component={BannerIndex}/>
        <Route path='/administrate/banners/new'
          onLeave={() =>{store.dispatch(appActions.resetBannerData())}}
          component={BannerNew}/>
        <Route path='/administrate/banners/:id'
          onEnter={(router)=> {store.dispatch(appActions.fetchBanner(router.params.id))}}
          onLeave={() =>{store.dispatch(appActions.resetBannerData())}}
          component={BannerShow}/>
        <Route path='/administrate/banners/:id/edit'
          onEnter={(router)=> {store.dispatch(appActions.fetchBanner(router.params.id))}}
          onLeave={() =>{store.dispatch(appActions.resetBannerData())}}
          component={BannerEdit}/>

        <Route
          onEnter={()=> {store.dispatch(appActions.fetchProducts())}}
          path='/administrate/products' component={ProductIndex}/>
        <Route path='/administrate/products/new'
          onLeave={() =>{store.dispatch(appActions.resetProductsData())}}
          component={ProductNew}/>
        <Route path='/administrate/products/:id'
          onEnter={(router)=> {store.dispatch(appActions.fetchProduct(router.params.id))}}
          onLeave={() =>{store.dispatch(appActions.resetProductsData())}}
          component={ProductShow}/>
        <Route path='/administrate/products/:id/edit'
          onEnter={(router)=> {store.dispatch(appActions.fetchProduct(router.params.id))}}
          onLeave={() =>{store.dispatch(appActions.resetProductsData())}}
          component={ProductEdit}/>

        <Route path='/administrate/categories/new'
          onLeave={() =>{store.dispatch(appActions.resetCategoriesData())}}
          component={CategoryNew}/>
        <Route
          onEnter={()=> {store.dispatch(appActions.fetchCategories())}}
          path='/administrate/categories' component={CategoryIndex}/>
        <Route path='/administrate/categories/:id'
          onEnter={(router)=> {store.dispatch(appActions.fetchCategory(router.params.id))}}
          onLeave={() =>{store.dispatch(appActions.resetCategoriesData())}}
          component={CategoryShow}/>
        <Route path='/administrate/categories/:id/edit'
          onEnter={(router)=> {store.dispatch(appActions.fetchCategory(router.params.id))}}
          onLeave={() =>{store.dispatch(appActions.resetCategoriesData())}}
          component={CategoryEdit}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
