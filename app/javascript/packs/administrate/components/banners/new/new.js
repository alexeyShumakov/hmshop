import React from 'react';

import Form from '../form';

export default (props) => {
  const banner = props.store.getIn(['banners', 'banner']);
  const errors = props.store.getIn(['banners', 'errors']);
  const setBanner = props.actions.setBanner;
  const createBanner = props.actions.createBanner;
  return(
    <div>
      <h3>Создать баннер</h3>
      <Form {...{banner, setBanner, createBanner, errors}}/>
    </div>
  )
}
