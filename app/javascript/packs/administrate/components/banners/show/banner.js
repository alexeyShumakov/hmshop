import React from 'react';
export default (props) => {
  let banner = props.store.getIn(['banners', 'banner']);
  return(
    <div>
      <h2>Баннер #{banner.get('id')}</h2>
      <dl>
        <dt>id</dt>
        <dd>{banner.get('id')}</dd>
        <dt>ссылка</dt>
        <dd>{banner.get('url')}</dd>
        <dt>изображение</dt>
        <dt><img src={banner.get('img')} alt=""/></dt>
      </dl>
    </div>
  )
}
