import React from 'react';

export default (props) => {
  let {notification, hide} = props;
  return(
    <div className='notification__wrapper'>
      {notification.get('isShow') &&
        <div className='notification float-left' onClick={hide}>
          <span>{notification.get('text')}</span>
        </div>
      }
    </div>
  )
}
