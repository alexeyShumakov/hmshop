import React from 'react';
import { Link } from 'react-router';
import Basket from './basket/Basket';
import Info from './info/Info';
import Search from './search/Search';

export default props => {
  let { store, actions } = props;
  return(
    <div className="row nav u-p12">
      <Link to='/'> <i className="nav__icon fa fa-rocket fa-lg"></i> </Link>
      <div className="nav__right">
        <Search/>
        <Info/>
        <Basket
          cart={store.getIn(['cart', 'cart'])}
          currentPosition={store.getIn(['cart', 'currentPosition'])}
          fetchCart={actions.fetchCart}
          incrementPosition={actions.cartIncPosition}
          decrementPosition={actions.cartDecPosition}
          resetPosition={actions.cartResetPosition}
        />
      </div>
    </div>
  )
}