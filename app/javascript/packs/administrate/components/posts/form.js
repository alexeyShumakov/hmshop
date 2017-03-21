import React from 'react';
import Input from '../input';

export default (props) => {
  const { post, setPost, action, errors, title } = props;
  const update = (value, field) => {
    const newPost = post.set(field, value);
    setPost(newPost);
  }
  return(
    <form onSubmit={action}>
      <fieldset>
        <Input
          title='Название'
          update={update}
          errors={errors}
          object={post}
          field='title'
        />
        <Input
          title='Краткое описание'
          update={update}
          errors={errors}
          object={post}
          field='preview'
        />
        <label>Изображение(1080x650)</label>
        <input type="file"
          onChange={(e)=> update(e.target.files[0], 'cover')}
        />
        {errors.has('cover') &&
          <span className='input-error'>{errors.get('cover').first()}</span>
        }

        <Input
          title='body'
          update={update}
          errors={errors}
          object={post}
          field='body'
        />
        <hr/>
        <input className="button-primary" type="submit" value={title}/>
      </fieldset>
    </form>
  )
}
