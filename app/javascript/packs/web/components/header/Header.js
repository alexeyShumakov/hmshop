import React from 'react';
import { Link } from 'react-router';
import Basket from './basket/Basket';
import Info from './info/Info';
import Search from './search/Search';

export default props => {
  let { store, actions } = props;
  return(
    <div className="row nav u-p12">
      <a href='/' className='brand'>
        <div
          style={{backgroundImage: `url(${store.getIn(['shop', 'small_left_logo'])})`}}
          className='brand__logo'
        />
        <span className='brand__title'>{store.getIn(['shop', 'title'])}</span>
      </a>
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
