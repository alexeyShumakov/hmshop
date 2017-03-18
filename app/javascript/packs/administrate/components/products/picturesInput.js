import React from 'react';

export default (props) => {
  const {errors, upload, title, pictures, remove } = props;
  return(
    <div>
      <label>{title}</label>
      <input type="file"
        onChange={(e)=> upload(e.target.files[0])}
      />
      {errors.has('pictures') &&
        <span className='input-error'>{errors.get('pictures').first()}</span>
      }

      <ul className='u-no-list-style'>
        { pictures && pictures.map((pic)=> {
          return(
            <li key={pic.get('id')}>
              <i className='fa fa-remove control-icon' onClick={()=> remove(pic)}></i>
              <img src={pic.get('thumb_img')} alt=""/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
