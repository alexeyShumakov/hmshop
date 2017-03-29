import React from 'react';

export default (props) => {
  let {order, setOrder, createOrder} = props;
  let errors = order.get('errors');
  let isLoading = order.get('isLoading')
  order = order.get('order');
  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder(order);
  }
  const handleChange = (value, field) =>{
    let newOrder = order.set(field, value)
    setOrder(newOrder);
  }
  return(
    <div className='order'>
      <h3>Оформить заказ</h3>
      <form onSubmit={handleSubmit} id='order__form'>
        <fieldset>
          <label htmlFor='order__name'>Имя</label>
          <input
            id='order__name'
            className={errors.has('name') ? 'input_invalid' : ''}
            type="text"
            value={order.get('name')}
            onChange={(e)=> {handleChange(e.target.value, 'name')}}
          />
          <label htmlFor='order__email'>Email</label>
          <input
            id='order__email'
            className={errors.has('email') ? 'input_invalid' : ''}
            type="text"
            value={order.get('email')}
            onChange={(e)=> {handleChange(e.target.value, 'email')}}
          />
          <label htmlFor='order__phone'>Номер телефона</label>
          <input
            id='order__phone'
            className={errors.has('phone') ? 'input_invalid' : ''}
            type="text"
            value={order.get('phone')}
            onChange={(e)=> {handleChange(e.target.value, 'phone')}}
          />
          <label htmlFor='order__address'>Адрес доставки</label>
          <input
            id='order__address'
            className={errors.has('address') ? 'input_invalid' : ''}
            type="text"
            value={order.get('address')}
            onChange={(e)=> {handleChange(e.target.value, 'address')}}
          />
          <input className="button-primary" type="submit" value="Оформить заказа" disabled={isLoading ? 'true' : ''} />
        </fieldset>
      </form>
    </div>
  )
}
