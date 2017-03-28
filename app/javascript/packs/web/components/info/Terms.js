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
        <ul> Дорогой посетитель! Убедительно прошу вас соблюдать несколько простых правил.
          <li>Относитесь уважительно к автору и к его автору.</li>
          <li>При использовании какой либо информации с моего магазина указывайте ссылку на источник.</li>
        </ul>
        <ul> Я в свою очередь гарантирую
          <li>Сохранять конфиденциальность всех ваших персональных данных.</li>
          <li>Трепетное и бережное отношение к каждой работе и каждому покупателю.</li>
        </ul>
      </div>
    </DocumentTitle>
  )
}
