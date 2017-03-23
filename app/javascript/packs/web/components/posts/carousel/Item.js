import React from 'react';
import {Link} from 'react-router';

export default (props) => {
  let {post, fetchPost, klassName }=  props;
  let id = post.get('id');
  klassName = klassName || 'column column-33';
    return(
      <div className={klassName}>
        <div className='simle-post__body'>
          <Link
            key={id}
            to={`/posts/${post.get('slug')}`}
            onClick={()=> fetchPost(id)}
          >
            <img src={post.get('thumb_cover')}/>
          </Link>
          <div className='simple-post__title'>
            {post.get('title')}
          </div>
          </div>
      </div>
    )
}
