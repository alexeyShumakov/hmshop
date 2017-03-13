import React from 'react';
import {Link} from 'react-router';
import Lazysizes from 'lazysizes';

export default (props) => {
  let {fetchPost, fetchPosts} = props.actions;
  let isLoading = props.store.getIn(['posts', 'isLoading']);
  let post = props.store.getIn(['posts', 'post']);
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

          <div className="row">
            <div className="column column-100 u-my12">
              {post.get('body')}
            </div>
          </div>
        </div>


      }
    </div>
  )
}
