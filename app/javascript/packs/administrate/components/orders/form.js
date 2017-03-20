import React from 'react';
import Input from '../input';
import Immutable from 'immutable';

export default (props) => {
  const {order, setOrder, action, errors, title} = props;
  const update = (value, field) => {
    const newOrder = order.set(field, value);
    setOrder(newOrder);
  }
  return(
    <form onSubmit={action}>
      <fieldset>
        <Input
          title='Имя'
          update={update}
          errors={errors}
          object={order}
          field='name'
        />
        <Input
          title='Номер телефона'
          update={update}
          errors={errors}
          object={order}
          field='phone'
        />
        <Input
          title='Email'
          update={update}
          errors={errors}
          object={order}
          field='email'
        />
        <Input
          title='Адрес'
          update={update}
          errors={errors}
          object={order}
          field='address'
        />
        <hr/>
        <input className="button-primary" type="submit" value={title}/>
      </fieldset>
    </form>
  )
}
