import React from 'react';
import {Link} from 'react-router';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw } from 'draft-js';
import Lazysizes from 'lazysizes';

export default (props) => {
  let {fetchPost, fetchPosts} = props.actions;
  let isLoading = props.store.getIn(['posts', 'isLoading']);
  let post = props.store.getIn(['posts', 'post']);
  let editorState;
  if (!isLoading) {
    const raw = post.get('raw_body');
    const contentState = convertFromRaw(JSON.parse(raw));
    editorState = EditorState.createWithContent(contentState);
  }
  return(
    <div>
      { !isLoading &&
        <div className='container'>
          <div className='breadcrumbs'>
            <span>
              <a className='breadcrumbs__item' href="/">Главная</a>
              <i className='breadcrumbs__item fa fa-angle-right'></i>
            </span>
            <span>
              <Link to='/posts'
                onClick={fetchPosts}
              >Блог </Link>
              <i className='breadcrumbs__item fa fa-angle-right'></i>
            </span>
            <span> {post.get('title')} </span>
          </div>
          <h3 className='u-page-title'>{post.get('title')}</h3>
          <div className="row">
            <div className="column column-100 post__img-wrapper">
              <img className='lazyload' data-src={post.get('medium_cover')}/>
            </div>
          </div>

          <hr/>
          <div className="row">
            <div className="column column-100 u-my12">
              <Editor editorState={editorState} readOnly={true} toolbarHidden={true}/>
            </div>
          </div>
        </div>


      }
    </div>
  )
}
