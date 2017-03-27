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

import CollectionIndex from './administrate/containers/collections/index';
import CollectionShow from './administrate/containers/collections/show';
import CollectionEdit from './administrate/containers/collections/edit';
import CollectionNew from './administrate/containers/collections/new';

import OrderIndex from './administrate/containers/orders/index';
import OrderShow from './administrate/containers/orders/show';
import OrderEdit from './administrate/containers/orders/edit';

import PostIndex from './administrate/containers/posts/index';
import PostShow from './administrate/containers/posts/show';
import PostNew from './administrate/containers/posts/new';
import PostEdit from './administrate/containers/posts/edit';

import ShopShow from './administrate/containers/shop/show';
import ShopEdit from './administrate/containers/shop/edit';

const actions = bindActionCreators(appActions, store.dispatch);
const fetchBanner    = (router) => {actions.fetchBanner(router.params.id)};
const fetchProduct   = (router) => {actions.fetchProduct(router.params.id)};
const fetchCategory  = (router) => {actions.fetchCategory(router.params.id)};
const fetchCollection= (router) => {actions.fetchCollection(router.params.id)};
const fetchOrder     = (router) => {actions.fetchOrder(router.params.id)};
const fetchPost      = (router) => {actions.fetchPost(router.params.id)};
const fetchShop      = (router) => {actions.fetchShop()};
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

        <Route path='/administrate/collections/new' component={CollectionNew} onLeave={actions.resetCollectionsData}/>
        <Route path='/administrate/collections' component={CollectionIndex} onEnter={actions.fetchCollections}/>
        <Route path='/administrate/collections/:id' component={CollectionShow} onEnter={fetchCollection} onLeave={actions.resetCollectionsData}/>
        <Route path='/administrate/collections/:id/edit' component={CollectionEdit} onEnter={fetchCollection} onLeave={actions.resetCollectionsData}/>

        <Route path='/administrate/orders' component={OrderIndex} onEnter={actions.fetchOrders}/>
        <Route path='/administrate/orders/:id' component={OrderShow} onEnter={fetchOrder} onLeave={actions.resetOrdersData}/>
        <Route path='/administrate/orders/:id/edit' component={OrderEdit} onEnter={fetchOrder} onLeave={actions.resetOrdersData}/>

        <Route path='/administrate/posts' component={PostIndex} onEnter={actions.fetchPosts}/>
        <Route path='/administrate/posts/new' component={PostNew} onLeave={actions.resetPostData}/>
        <Route path='/administrate/posts/:id' component={PostShow} onEnter={fetchPost} onLeave={actions.resetPostData}/>
        <Route path='/administrate/posts/:id/edit' component={PostEdit} onEnter={fetchPost} onLeave={actions.resetPostData}/>

        <Route path='/administrate/shop' component={ShopShow} onEnter={fetchShop} onLeave={actions.resetShopData}/>
        <Route path='/administrate/shop/edit' component={ShopEdit} onEnter={fetchShop} onLeave={actions.resetShopData}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
