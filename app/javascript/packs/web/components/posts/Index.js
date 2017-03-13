import React from 'react';
import Post from './Post';

export default (props) => {
  let posts = props.store.getIn(['posts', 'posts']);
  let isLoading = props.store.getIn(['posts', 'isLoading']);
  let { fetchPost } = props.actions;
  return(
    <div>
      <div className='container'>
        <div className='breadcrumbs'>
          <span>
            <a className='breadcrumbs__item' href="/">Главная</a>
            <i className='breadcrumbs__item fa fa-angle-right'></i>
          </span>
          <span>Блог</span>
        </div>
        <h3 className='u-page-title'>Блог</h3>
        { !isLoading && !posts.isEmpty() && posts.map((post)=>{
          let key = post.get('id')
          return <Post {...{key, post, fetchPost}} />
          })
        }
      </div>
    </div>
  )
}
