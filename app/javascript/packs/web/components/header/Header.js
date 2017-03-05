import React from 'react';
import { Link } from 'react-router';
import Basket from './basket/Basket';

export default props => {
  let { store, actions } = props;
  return(
    <div className="row nav u-p12">
      <Link to='/' onClick={() => actions.setRootCategoryId(0) }>
        <i className="nav__icon fa fa-rocket fa-lg"></i>
      </Link>
      <div className="nav__right">
        <i className="nav__icon fa fa-search fa-lg"></i>
        <i className="nav__icon fa fa-bars fa-lg"></i>
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
