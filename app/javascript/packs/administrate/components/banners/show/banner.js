import React from 'react';
import {Link, browserHistory} from 'react-router';
export default (props) => {
  const banner = props.store.getIn(['banners', 'banner']);

  const destroy = () => {
    props.actions.destroyBanner(banner.get('id')).then(()=> {
      browserHistory.push('/administrate/banners');
    })
  }
  return(
    <div>
      <div className='control-buttons float-right'>
        <Link
          to={`/administrate/banners/${banner.get('id')}/edit`}
          className="button button-large">
          Редактировать
        </Link>
        <button
          onClick={destroy}
          className="button button-large button-outline">
          Удалить
        </button>
      </div>
      <h3>Баннер #{banner.get('id')}</h3>
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
