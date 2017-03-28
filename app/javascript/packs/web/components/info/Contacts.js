import React from 'react';
import DocumentTitle from 'react-document-title';
import Breadcrumbs from '../Breadcrumbs';
import Immutable from 'immutable';

const fakeNode = Immutable.fromJS({
  ancestors: [],
  title: 'Контакты'
})

export default (props) => {
  let shop = props.store.get('shop');
  return (
    <DocumentTitle title="О нас">
      <div className='container'>
        <Breadcrumbs node={fakeNode}/>
        <h3 className='u-page-title'>Контакты</h3>
        <dl>
          <dt>Email</dt>
          <dd>{shop.get('email')}</dd>
          <dt>Телефон</dt>
          <dd>{shop.get('phone')}</dd>
          <dt>Online консультант</dt>
        </dl>
      </div>
    </DocumentTitle>
  )
}
