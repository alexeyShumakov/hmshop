import React from 'react';
import LineItem from './LineItem';

export default (props) => {
  let style = {
    top: `-${(props.currentPosition * 100)}px`
  }
  return(
    <div>
      { props.lineItems.size > 3 &&
        <div className='basket-line-item-list__arr' onClick={props.decrementPosition}>
          <i className='fa fa-chevron-up'></i>
        </div>
      }
      <div className='basket-line-item-list__wrapper'>

        <ul className='u-no-list-style basket-line-item-list' style={style}>
          {
            props.lineItems.map((lineItem) => {
              return(<LineItem key={lineItem.get('id')} lineItem={lineItem} />)
            })
          }
        </ul>
      </div>
      { props.lineItems.size > 3 &&
        <div className='basket-line-item-list__arr' onClick={props.incrementPosition}>
          <i className='fa fa-chevron-down'></i>
        </div>
      }
    </div>
  )
}
