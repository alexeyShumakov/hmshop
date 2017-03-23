import React from 'react';
import {Link} from 'react-router';
import Lazysizes from 'lazysizes';

export default (props) => {
  return(
    <div className='row post-preview'>
      <div className='column column-33'>
        <Link
          to={`/posts/${props.post.get('slug')}`}
          onClick={()=> props.fetchPost(props.post.get('id'))}
        >
          <img className='lazyload' data-src={props.post.get('thumb_cover')} alt=""/>
        </Link>
      </div>
      <div className='column column-66'>
        <Link
          to={`/posts/${props.post.get('slug')}`}
          onClick={()=> props.fetchPost(props.post.get('id'))}
        >
          <h4> {props.post.get('title')} </h4>
        </Link>
        <p>{props.post.get('preview')}</p>
      </div>
    </div>
  )
}
