import React from 'react';
import {Link, browserHistory} from 'react-router';

import Form from '../form';

export default (props) => {
  const post = props.store.getIn(['posts', 'post']);
  const errors = props.store.getIn(['posts', 'errors']);
  const { createPost, destroyPost, updatePost, setPost } = props.actions;
  const title = 'Изменить';
  const destroy = () => {
    destroyPost(post.get('id')).then(()=> {
      browserHistory.push('/administrate/posts');
    })
  }
  const action = (e)=> {e.preventDefault(); updatePost(post)};
  return(
    <div>
      <div className='control-buttons float-right'>
        <Link
          to={`/administrate/posts/${post.get('id')}`}
          className="button button-large">
          Отмена
        </Link>
        <button
          onClick={destroy}
          className="button button-large button-outline">
          Удалить
        </button>
      </div>
      <h3>Редактировать Новость #{post.get('id')}</h3>
      <div className="clearfix"></div>
      <Form {...{post, setPost, action, errors, title}}/>
    </div>
  )
}
