import React from 'react';
import { Link } from 'react-router';

export default props => {
  return(
    <div className="row nav u-p12">
      <Link to='/'>
        <i className="nav__icon fa fa-rocket fa-lg"></i>
      </Link>
      <div className="nav__right">
        <i className="nav__icon fa fa-search fa-lg"></i>
        <i className="nav__icon fa fa-bars fa-lg"></i>
        <i className="nav__icon fa fa-shopping-cart fa-lg"></i>
      </div>
    </div>
    )
}
