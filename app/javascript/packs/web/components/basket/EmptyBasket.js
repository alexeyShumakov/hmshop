import React from 'react';

export default (props) => {
  return(
    <div className="row">
      <div className="column">

        { props.isShow ?
            <div className='order__notification' onClick={()=> props.show(false)} >
              Поздравляем! Ваша заказ оформлен. Мы скоро с вами свяжемся.
            </div>
            :
            <div>
              <h3 className='u-page-title'>Ваша корзина пуста</h3>
              <div className='empty-basket'>
                <i className="fa fa-shopping-basket fa-4x" aria-hidden="true"></i>
              </div>
            </div>
        }
      </div>
    </div>
  )
}
