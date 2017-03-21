import React from 'react';
import {Link} from 'react-router';
import Post from './post';
export default (props) => {
  const posts = props.store.getIn(['posts', 'posts'])
  const {destroyPost, fetchPosts} = props.actions;
  return(
    <div>
      <div className='control-buttons float-right'>
        <Link
          to='/administrate/posts/new'
          className="button button-large">
          Новая Новость
        </Link>
      </div>
      <h3>Новости</h3>
      <div className="clearfix"></div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Краткое описание</th>
            <th>действия</th>
          </tr>
        </thead>
        <tbody>
          { !posts.isEmpty() && posts.map((post)=>{
            const key = post.get('id');
            let destroy = () => destroyPost(key).then(() => fetchPosts());
            return <Post {...{key, post, destroy}} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}
