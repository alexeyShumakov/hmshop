import React from 'react';
import {Link, browserHistory} from 'react-router';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw } from 'draft-js';
export default (props) => {
  const post = props.store.getIn(['posts', 'post']);
  let isLoading = props.store.getIn(['posts', 'isLoading']);
  let editorState;
  if (!isLoading) {
    const raw = post.get('raw_body');
    const contentState = convertFromRaw(JSON.parse(raw));
    editorState = EditorState.createWithContent(contentState);
  }

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
        <dd>
          <Editor editorState={editorState} readOnly={true} toolbarHidden={true}/>
         </dd>
      </dl>
    </div>
  )
}
