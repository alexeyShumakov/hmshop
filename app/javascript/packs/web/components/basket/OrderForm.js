import React from 'react';

export default (props) => {
  let {order, setOrder, createOrder} = props;
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
            type="text"
            value={order.get('name')}
            onChange={(e)=> {handleChange(e.target.value, 'name')}}
          />
          <label>Email</label>
          <input
            type="text"
            value={order.get('email')}
            onChange={(e)=> {handleChange(e.target.value, 'email')}}
          />
          <label>Номер телефона</label>
          <input
            type="text"
            value={order.get('phone')}
            onChange={(e)=> {handleChange(e.target.value, 'phone')}}
          />
          <label>Адрес доставки</label>
          <input
            type="text"
            value={order.get('address')}
            onChange={(e)=> {handleChange(e.target.value, 'address')}}
          />
          <input className="button-primary" type="submit" value="Оформить заказа"/>
        </fieldset>
      </form>
    </div>
  )
}
