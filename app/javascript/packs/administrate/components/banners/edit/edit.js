import React from 'react';
import {Link, browserHistory} from 'react-router';

import Form from '../form';

export default (props) => {
  const banner = props.store.getIn(['banners', 'banner']);
  const errors = props.store.getIn(['banners', 'errors']);
  const { createBanner, destroyBanner, updateBanner, setBanner } = props.actions;
  const title = 'Изменить';
  const destroy = () => {
    destroyBanner(banner.get('id')).then(()=> {
      browserHistory.push('/administrate/banners');
    })
  }
  const action = (e)=> {e.preventDefault(); updateBanner(banner)};
  return(
    <div>
      <div className='control-buttons float-right'>
        <Link
          to={`/administrate/banners/${banner.get('id')}`}
          className="button button-large">
          Отмена
        </Link>
        <button
          onClick={destroy}
          className="button button-large button-outline">
          Удалить
        </button>
      </div>
      <h3>Редактировать баннер #{banner.get('id')}</h3>
      <div className="clearfix"></div>
      <Form {...{banner, setBanner, action, errors, title}}/>
    </div>
  )
}
