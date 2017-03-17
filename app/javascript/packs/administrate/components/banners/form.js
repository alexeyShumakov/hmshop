import React from 'react';

export default (props) => {
  const { banner, setBanner, action, errors, title } = props;
  const update = (value, field) => {
    const newBanner = banner.set(field, value);
    setBanner(newBanner);
  }
  return(
    <form onSubmit={action}>
      <fieldset>
        <label>Ссылка</label>
        <input
          className={errors.has('url') ? 'input_invalid' : ''}
          type="text"
          onChange={(e)=> update(e.target.value, 'url')}
          value={banner.get('url')}/>
        {errors.has('url') &&
          <span className='input-error'>{errors.get('url').first()}</span>
        }
        <label>Изображение(1080x450)</label>
        <input type="file"
          onChange={(e)=> update(e.target.files[0], 'image')}
        />
        {errors.has('image') &&
          <span className='input-error'>{errors.get('image').first()}</span>
        }
        <hr/>
        <input className="button-primary" type="submit" value={title}/>
      </fieldset>
    </form>
  )
}
