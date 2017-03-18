import React from 'react';
import _ from 'lodash';

export default (props) => {
  let {object, field, title, errors, update, type} = props;
  if (_.isEmpty(type))
    type = 'text'
  return(
    <div>
      <label>{title}</label>
      <input
        className={errors.has(field) ? 'input_invalid' : ''}
        type={type}
        onChange={(e)=> update(e.target.value, field)}
        value={object.get(field)}/>
      {errors.has(field) &&
        <span className='input-error'>{errors.get(field).first()}</span>
      }
    </div>
  )
}
