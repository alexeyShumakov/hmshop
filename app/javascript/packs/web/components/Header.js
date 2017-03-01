import React from 'react';
import { Link } from 'react-router';

export default props => {
  return(
    <div className="row nav u-p12">
      <Link to='/' onClick={() => props.setRootCategoryId(0) }>
        <i className="nav__icon fa fa-rocket fa-lg"></i>
      </Link>
      <div className="nav__right">
        <i className="nav__icon fa fa-search fa-lg"></i>
        <i className="nav__icon fa fa-bars fa-lg"></i>
        <div className="basket">
          <i className="nav__icon fa fa-shopping-cart fa-lg"></i>
          { props.cart.get('total_count') > 0 &&
            <span className='basket__counter'>
              <b>{props.cart.get('total_count')}</b>
            </span>
          }
        </div>
      </div>
    </div>
    )
}
