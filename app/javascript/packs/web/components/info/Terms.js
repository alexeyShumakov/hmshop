import React from 'react';
import DocumentTitle from 'react-document-title';
import Breadcrumbs from '../Breadcrumbs';
import Immutable from 'immutable';

const fakeNode = Immutable.fromJS({
  ancestors: [],
  title: 'Правила'
})

export default (props) => {
  return (
    <DocumentTitle title="О нас">
      <div className='container'>
        <Breadcrumbs node={fakeNode}/>
        <h3 className='u-page-title'>Правила</h3>
      </div>
    </DocumentTitle>
  )
}
