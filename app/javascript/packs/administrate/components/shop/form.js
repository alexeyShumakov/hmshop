import React from 'react';
import Input from '../input';
import Immutable from 'immutable';

export default (props) => {
  const {shop, setShop, action, errors, title} = props;
  const update = (value, field) => {
    const newShop = shop.set(field, value);
    setShop(newShop);
  }
  return(
    <form onSubmit={action}>
      <fieldset>
        <Input
          title='Название'
          update={update}
          errors={errors}
          object={shop}
          field='title'
        />
        <Input
          title='Номер банковской карты'
          update={update}
          errors={errors}
          object={shop}
          field='card_number'
        />
        <Input
          title='Email'
          update={update}
          errors={errors}
          object={shop}
          field='email'
        />

        <label>Логотип(квадратное изображение)</label>
        <input type="file"
          onChange={(e)=> update(e.target.files[0], 'left_logo')}
        />
        {errors.has('left_logo') &&
          <span className='input-error'>{errors.get('left_logo').first()}</span>
        }
        <hr/>
        <input className="button-primary" type="submit" value={title}/>
      </fieldset>
    </form>
  )
}
