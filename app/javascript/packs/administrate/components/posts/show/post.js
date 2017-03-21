import React from 'react';
import {Link, browserHistory} from 'react-router';
export default (props) => {
  const post = props.store.getIn(['posts', 'post']);

  const destroy = () => {
    props.actions.destroyPost(post.get('id')).then(()=> {
      browserHistory.push('/administrate/posts');
    })
  }
  return(
    <div>
      <div className='control-buttons float-right'>
        <Link
          to={`/administrate/posts/${post.get('id')}/edit`}
          className="button button-large">
          Редактировать
        </Link>
        <button
          onClick={destroy}
          className="button button-large button-outline">
          Удалить
        </button>
      </div>
      <h3>Новость #{post.get('id')}</h3>
      <dl>
        <dt>id</dt>
        <dd>{post.get('id')}</dd>
        <dt>Краткое описание</dt>
        <dd>{post.get('preview')}</dd>
        <dt>изображение</dt>
        <dt><img src={post.get('thumb_cover')} alt=""/></dt>
        <dt>Новость</dt>
        <dd>{post.get('body')}</dd>
      </dl>
    </div>
  )
}
