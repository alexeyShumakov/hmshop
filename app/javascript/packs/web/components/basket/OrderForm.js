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
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Имя</label>
          <input
            className={errors.has('name') ? 'input_invalid' : ''}
            type="text"
            value={order.get('name')}
            onChange={(e)=> {handleChange(e.target.value, 'name')}}
          />
          <label>Email</label>
          <input
            className={errors.has('email') ? 'input_invalid' : ''}
            type="text"
            value={order.get('email')}
            onChange={(e)=> {handleChange(e.target.value, 'email')}}
          />
          <label>Номер телефона</label>
          <input
            className={errors.has('phone') ? 'input_invalid' : ''}
            type="text"
            value={order.get('phone')}
            onChange={(e)=> {handleChange(e.target.value, 'phone')}}
          />
          <label>Адрес доставки</label>
          <input
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
