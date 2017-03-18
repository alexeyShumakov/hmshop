import React from 'react';
import _ from 'lodash';

export default (props) => {
  let {object, field, title, errors, update} = props;
  return(
    <div>
      <label>{title}</label>
      <textarea
        className={errors.has(field) ? 'input_invalid' : ''}
        onChange={(e)=> update(e.target.value, field)}
        value={object.get(field)}/>
      {errors.has(field) &&
        <span className='input-error'>{errors.get(field).first()}</span>
      }
    </div>
  )
}
