import React from 'react';

export default props => {
  return(
    <div className="column column-25">
      <div className="cart">
        {props.product.get('title')}
      </div>
    </div>
  )
}

