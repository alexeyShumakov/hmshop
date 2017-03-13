import React from 'react';
import Post from './Item';

export default (props) => {
  let { posts, fetchPost, title, klassName } = props;
  return(
    <div className='u-my12 posts__list'>
      <h4>{title}</h4>
      <div className="row">
        { posts.map((obj)=> {
          return(
            <Post
              klassName={klassName}
              fetchPost={fetchPost}
              key={obj.get('id')}
              post={obj}
            />
            )
          })
        }
      </div>
    </div>

  )
}
