import React from 'react';
import {Link} from 'react-router';
import Banner from './banner';
export default (props) => {
  const banners = props.store.getIn(['banners', 'banners'])
  const {destroyBanner, fetchBanners} = props.actions;
  return(
    <div>
      <div className='control-buttons float-right'>
        <Link
          to='/administrate/banners/new'
          className="button button-large">
          Новый Баннер
        </Link>
      </div>
      <h2>Баннеры</h2>
      <div className="clearfix"></div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ссылка</th>
            <th>изобр.</th>
            <th>действия</th>
          </tr>
        </thead>
        <tbody>
          { !banners.isEmpty() && banners.map((banner)=>{
            const key = banner.get('id');
            let destroy = () => destroyBanner(key).then(() => fetchBanners());
            return <Banner {...{key, banner, destroy}} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}
