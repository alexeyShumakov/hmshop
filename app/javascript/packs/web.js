import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './web/store/store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './web/containers/App';
import Home from './web/components/Home';
import Category from './web/containers/Category';
import Product from './web/containers/Product';
import Basket from './web/containers/Basket';

import About from './web/components/info/About';
import Contacts from './web/components/info/Contacts';
import Delivery from './web/components/info/Delivery';
import HowTo from './web/components/info/HowToOrder';
import Terms from './web/components/info/Terms';


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/categories/:id' component={Category}/>
        <Route path='/products/:id' component={Product}/>
        <Route path='/cart' component={Basket}/>

        <Route path='/info/about' component={About}/>
        <Route path='/info/contacts' component={Contacts}/>
        <Route path='/info/delivery' component={Delivery}/>
        <Route path='/info/how_to_order' component={HowTo}/>
        <Route path='/info/terms' component={Terms}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
