import React from 'react';
import Textarea from '../textarea';
import Input from '../input';

export default (props) => {
  const { collection, setCollection, action, errors, title } = props;
  const update = (value, field) => {
    const newCollection = collection.set(field, value);
    setCollection(newCollection);
  }
  return(
    <form onSubmit={action}>
      <fieldset>
        <Input
          title='Название'
          update={update}
          errors={errors}
          object={collection}
          field='title'
        />
        <Textarea
          title='Описание'
          update={update}
          errors={errors}
          object={collection}
          field='description'
        />
        <label>Изображение(1000x650)</label>
        <input type="file"
          onChange={(e)=> update(e.target.files[0], 'cover')}
        />
        {errors.has('cover') &&
          <span className='input-error'>{errors.get('cover').first()}</span>
        }
        <hr/>
        <input className="button-primary" type="submit" value={title}/>
      </fieldset>
    </form>
  )
}
