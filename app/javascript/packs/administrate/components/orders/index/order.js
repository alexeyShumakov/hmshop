import React from 'react';
import Lazysizes from 'lazysizes';
import {Link} from 'react-router';

export default (props) => {
  const { order, destroy } = props;
  return(
    <tr>
      <td>
        <Link to={`/administrate/orders/${order.get('id')}`}>
          #{order.get('id')}
        </Link>
      </td>
      <td>{order.get('name')}</td>
      <td>{order.get('phone')}</td>
      <td>{order.get('total_price')}</td>
      <td>
        <Link to={`/administrate/orders/${order.get('id')}/edit`}>
          <i className="control-icon fa fa-pencil fa-lg"></i>
        </Link>
        <i onClick={destroy} className="control-icon fa fa-remove fa-lg"></i>
      </td>
    </tr>
  )
}
