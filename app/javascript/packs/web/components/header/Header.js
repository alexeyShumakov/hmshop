import React from 'react';
import { Link } from 'react-router';
import Basket from './basket/Basket';
import Info from './info/Info';
import Search from './search/Search';

export default props => {
  let { store, actions } = props;
  return(
    <div className="row nav u-p12">
      <a href='/'> <i className="nav__icon fa fa-rocket fa-lg"></i> </a>
      <div className="nav__right">
        <Search
          keyword={store.getIn(['search', 'keyword'])}
          setKeyword={actions.setSearchKeyword}
          products={store.getIn(['search', 'products'])}
          setProducts={actions.setSearchProducts}
          search={actions.searchProducts}
          fetchProduct={actions.fetchFullProduct}
        />
        <Info
          fetchPosts={actions.fetchPosts}
        />
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
