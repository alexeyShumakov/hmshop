import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './web/store/store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './web/containers/App';
import Home from './web/containers/Home';
import Category from './web/containers/Category';
import Product from './web/containers/Product';
import Basket from './web/containers/Basket';
import Collections from './web/containers/IndexCollections';
import Collection from './web/containers/Collection';
import Posts from './web/containers/IndexPosts';
import Post from './web/containers/ShowPost';

import About from './web/components/info/About';
import Contacts from './web/components/info/Contacts';
import Delivery from './web/components/info/Delivery';
import HowTo from './web/components/info/HowToOrder';
import Terms from './web/components/info/Terms';

import * as appActions from './web/actions';

const resetCategory = () => {
  store.dispatch(appActions.setRootCategoryId(0));
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={Home} onEnter={resetCategory} />
        <Route path='/posts' component={Posts}/>
        <Route path='/posts/:id' component={Post}/>

        <Route path='/collections' component={Collections}/>
        <Route path='/collections/:id' component={Collection}/>

        <Route path='/categories/:id' component={Category}/>
        <Route path='/products/:id' component={Product}/>
        <Route path='/cart' component={Basket} onEnter={resetCategory} />

        <Route path='/info/about' component={About} onEnter={resetCategory}/>
        <Route path='/info/contacts' component={Contacts} onEnter={resetCategory}/>
        <Route path='/info/delivery' component={Delivery} onEnter={resetCategory}/>
        <Route path='/info/how_to_order' component={HowTo} onEnter={resetCategory}/>
        <Route path='/info/terms' component={Terms} onEnter={resetCategory}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
