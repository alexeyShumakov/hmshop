import React from 'react';
import {Link, browserHistory} from 'react-router';
export default (props) => {
  const product = props.store.getIn(['products', 'product']);
  const isLoading = props.store.getIn(['products', 'isLoading']);

  const destroy = () => {
    props.actions.destroyProduct(product.get('id')).then(()=> {
      browserHistory.push('/administrate/products');
    })
  }
  return(
    <div>
      { !isLoading &&
        <div>
          <div className='control-buttons float-right'>
            <Link
              to={`/administrate/products/${product.get('id')}/edit`}
              className="button button-large">
              Редактировать
            </Link>
            <button
              onClick={destroy}
              className="button button-large button-outline">
              Удалить
            </button>
          </div>
          <h3>Продукт #{product.get('id')}</h3>
          <dl>
            <dt>id</dt>
            <dd>{product.get('id')}</dd>
            <dt>Название</dt>
            <dd>{product.get('title')}</dd>
            <dt>Для примера?</dt>
            <dd>{product.get('for_example') ? 'Да' : 'Нет'}</dd>
            <dt>Категория</dt>
            <dd>{product.getIn(['category', 'title'])}</dd>
            <dt>Цена</dt>
            <dd>{product.get('price')}</dd>
            <dt>Описание</dt>
            <dd>{product.get('description')}</dd>
            <dt>изображения</dt>
            <dd>
              <ul className='u-no-list-style'>
                {product.get('pictures').map((pic)=> {
                  return <li key={pic.get('id')}><img src={pic.get('thumb_img')} alt=""/></li>
                })}
              </ul>
            </dd>
          </dl>
        </div>
      }
    </div>
  )
}
