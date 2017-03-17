import React from 'react';

export default (props) => {
  const { product, setProduct, action, errors, title } = props;
  const update = (value, field) => {
    const newProduct = product.set(field, value);
    setProduct(newProduct);
  }
  return(
    <form onSubmit={action}>
      <fieldset>
        <label>Название</label>
        <input
          className={errors.has('title') ? 'input_invalid' : ''}
          type="text"
          onChange={(e)=> update(e.target.value, 'title')}
          value={product.get('title')}/>
        {errors.has('url') &&
          <span className='input-error'>{errors.get('title').first()}</span>
        }
        <hr/>
        <input className="button-primary" type="submit" value={title}/>
      </fieldset>
    </form>
  )
}
