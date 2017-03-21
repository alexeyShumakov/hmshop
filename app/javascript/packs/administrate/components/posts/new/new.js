import React from 'react';

import Form from '../form';

export default (props) => {
  const {store, actions} = props;
  const post = store.getIn(['posts', 'post']);
  const errors = store.getIn(['posts', 'errors']);
  const {setPost, createPost} = actions;
  const action = (e)=> {e.preventDefault(); createPost(post)};
  const title = 'Создать';
  return(
    <div>
      <h3>Создать новость</h3>
      <Form {...{post, setPost, action, errors, title}}/>
    </div>
  )
}
