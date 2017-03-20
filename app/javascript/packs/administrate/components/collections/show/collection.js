import React from 'react';
import {Link, browserHistory} from 'react-router';
export default (props) => {
  const collection = props.store.getIn(['collections', 'collection']);

  const products = collection.get('products');
  const destroy = () => {
    props.actions.destroyCollection(collection.get('id')).then(()=> {
      browserHistory.push('/administrate/collections');
    })
  }
  return(
    <div>
      <div className='control-buttons float-right'>
        <Link
          to={`/administrate/collections/${collection.get('id')}/edit`}
          className="button button-large">
          Редактировать
        </Link>
        <button
          onClick={destroy}
          className="button button-large button-outline">
          Удалить
        </button>
      </div>
      <h3>Коллекция #{collection.get('id')}</h3>
      <dl>
        <dt>id</dt>
        <dd>{collection.get('id')}</dd>
        <dt>Название</dt>
        <dd>{collection.get('title')}</dd>
        <dt>Описание</dt>
        <dd>{collection.get('description')}</dd>
        <dt>изображение</dt>
        <dd><img src={collection.get('cover_medium')} alt=""/></dd>
        <dt>Продукты</dt>
        <dd>
          <ul className="u-no-list-style">
            { products && products.map((product)=>{
              return <li key={product.get('id')}><img src={product.get('thumb_cover')} alt=""/></li>
              })
            }
          </ul>
        </dd>

      </dl>
    </div>
  )
}
