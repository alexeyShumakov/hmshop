import React from 'react';
import Banners from './Banners';

export default props => {
  return(
    <div className="container">
      <div className="row">
        <div className="column">
          <Banners banners={props.store.getIn(['home', 'banners'])}/>
        </div>
      </div>
    </div>
  )
}
