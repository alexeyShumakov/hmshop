import React from 'react';
import { Link } from 'react-router';
import Basket from './basket/Basket';

export default props => {
  return(
    <div className="row nav u-p12">
      <Link to='/' onClick={() => props.setRootCategoryId(0) }>
        <i className="nav__icon fa fa-rocket fa-lg"></i>
      </Link>
      <div className="nav__right">
        <i className="nav__icon fa fa-search fa-lg"></i>
        <i className="nav__icon fa fa-bars fa-lg"></i>
        <Basket cart={props.cart}/>
      </div>
    </div>
  )
}
