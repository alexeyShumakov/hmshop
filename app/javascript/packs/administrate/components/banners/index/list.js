import React from 'react';
import Banner from './banner';

export default (props) => {
  const banners = props.store.getIn(['banners', 'banners'])
  return(
    <div>
      <h2>Баннеры</h2>
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
            return <Banner {...{key, banner}} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}
