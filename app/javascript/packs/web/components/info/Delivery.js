import React from 'react';
import DocumentTitle from 'react-document-title';
import Breadcrumbs from '../Breadcrumbs';
import Immutable from 'immutable';

const fakeNode = Immutable.fromJS({
  ancestors: [],
  title: 'Доставка'
})

export default (props) => {
  return (
    <DocumentTitle title="О нас">
      <div className='container'>
        <Breadcrumbs node={fakeNode}/>
        <h3 className='u-page-title'>Доставка</h3>
        <p>Доставка осуществляется любым удобным для вас способом.</p>
        <p>Стоимость доставки от <b>300 руб.</b></p>
        <ul><b>Способ доставки</b>
          <li>Самовывоз</li>
          <li>Почта России</li>
          <li>Служба доставки</li>
        </ul>
        <p>Способ доставки уточняется после оформления заказа.</p>
        <p> ПРЕДОСТАВЛЯЮ ГАРАНТИЮ возврата денежных средств в случае утери посылки.</p>
      </div>
    </DocumentTitle>
  )
}
