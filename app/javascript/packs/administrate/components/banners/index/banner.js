import React from 'react';
import Banner from './banner';
import {Link} from 'react-router';

export default (props) => {
  const { banner, destroy } = props;
  return(
    <tr>
      <td>
        <Link to={`/administrate/banners/${banner.get('id')}`}>
          #{banner.get('id')}
        </Link>
      </td>
      <td>{banner.get('url')}</td>
      <td><img src={banner.get('img')} alt="" className='u-table-img'/></td>
      <td>
        <Link to={`/administrate/banners/${banner.get('id')}/edit`}>
          <i className="control-icon fa fa-pencil fa-lg"></i>
        </Link>
        <i onClick={destroy} className="control-icon fa fa-remove fa-lg"></i>
      </td>
    </tr>
  )
}
