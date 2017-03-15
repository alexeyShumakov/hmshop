import React from 'react';
import axios from '../../utils/axios';

const signOut = () => {
  axios.delete('/admins/sign_out.json').then(() => {
    window.location.replace('/');
  })
}

export default (props) => {
  return(
    <div className='nav'>
      <span className='nav__item float-right' onClick={signOut}>
        <span className='nav__exit'>Выход</span>
      </span>
      <div className="clearfix"></div>
    </div>
  )
}
