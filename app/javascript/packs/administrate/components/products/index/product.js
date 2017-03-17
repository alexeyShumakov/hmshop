import React from 'react';
import Lazysizes from 'lazysizes';
import {Link} from 'react-router';

export default (props) => {
  const { product, destroy } = props;
  return(
    <tr>
      <td>
        <Link to={`/administrate/products/${product.get('id')}`}>
          #{product.get('id')}
        </Link>
      </td>
      <td>{product.get('title')}</td>
      <td>{product.get('price')}</td>
      <td><img data-src={product.get('thumb_cover')} alt="" className='u-table-img lazyload'/></td>
      <td>
        <Link to={`/administrate/products/${product.get('id')}/edit`}>
          <i className="control-icon fa fa-pencil fa-lg"></i>
        </Link>
        <i onClick={destroy} className="control-icon fa fa-remove fa-lg"></i>
      </td>
    </tr>
  )
}
