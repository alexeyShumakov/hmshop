import React from 'react';

export default (props) => {
  const { banner, setBanner, createBanner, errors } = props;
  const update = (value, field) => {
    const newBanner = banner.set(field, value);
    setBanner(newBanner);
  }

  return(
    <form onSubmit={(e)=> {e.preventDefault(); createBanner(banner)}}>
      <fieldset>
        <label>Ссылка</label>
        <input
          className={errors.has('url') ? 'input_invalid' : ''}
          type="text"
          onChange={(e)=> update(e.target.value, 'url')}
          value={banner.get('url')}/>
        {errors.has('image') &&
          <span className='input-error'>{errors.get('image').first()}</span>
        }
        <label>Изображение</label>
        <input type="file"
          onChange={(e)=> update(e.target.files[0], 'image')}
        />
        {errors.has('image') &&
          <span className='input-error'>{errors.get('image').first()}</span>
        }
        <hr/>
        <input className="button-primary" type="submit" value="Создать"/>
      </fieldset>
    </form>
  )
}
