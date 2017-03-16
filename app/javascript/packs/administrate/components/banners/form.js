import React from 'react';

export default (props) => {
  const { banner, setBanner, createBanner } = props;
  const update = (value, field) => {
    const newBanner = banner.set(field, value);
    setBanner(newBanner);
  }

  return(
    <form onSubmit={(e)=> {e.preventDefault(); createBanner(banner)}}>
      <fieldset>
        <label>Ссылка</label>
        <input
          type="text"
          onChange={(e)=> update(e.target.value, 'url')}
          value={banner.get('url')}/>
        <label>Изображение</label>
        <input type="file"
          onChange={(e)=> update(e.target.files[0], 'image')}
        />
        <hr/>
        <input className="button-primary" type="submit" value="Создать"/>
      </fieldset>
    </form>
  )
}
