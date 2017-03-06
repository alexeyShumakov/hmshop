import React from 'react';
import LineItem from './LineItem';
import ProductModal from '../showcase/productModal/ProductModal'

export default (props) => {
  let { store, actions } = props;
  let cart = store.getIn(['cart', 'cart']);
  let lineItems = cart.get('line_items');
  let modalProduct = store.get('modalProduct');
  return(
    <div className='column'>
      <ProductModal
        openModal={actions.setModalProductState}
        createLineItem={actions.createLineItem}
        setCurrentPicture={actions.setModalCurrentPicture}
        product={modalProduct.get('product')}
        products={store.get('products')}
        fetchProduct={actions.fetchProduct}
        currentPicture={modalProduct.get('currentPicture')}
        isLoading={modalProduct.get('isLoading')}
        isOpen={modalProduct.get('isOpen')} />
      <div className='full-basket'>
        <h2>Ваша корзина</h2>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Описание</th>
              <th>Цена</th>
              <th>Сумма</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            { lineItems && lineItems.map((item, position)=>{
              return(
                <LineItem
                  openModal={actions.setModalProductState}
                  fetchProduct={actions.fetchProduct}
                  key={item.get('id')}
                  item={item}
                  destroy={actions.destroyLineItem}
                  update={actions.updateLineItem}
                  position={position + 1}
                />
              )
              })
            }
          </tbody>
        </table>
        <div className='full-basket__footer'>
          <h4 className='full-basket__total-price'>
            <span>Итого: </span>
            <b>{cart.get('total_price')}</b> <i className='fa fa-rub'></i>
          </h4>
        </div>
      </div>
      <div className='order'>
        <h3>Оформить заказ</h3>
        <form>
          <fieldset>
            <label>Имя</label>
            <input type="text"/>
            <label>Email</label>
            <input type="text"/>
            <label>Номер телефона</label>
            <input type="text"/>
            <label>Адрес доставки</label>
            <input type="text"/>
            <input className="button-primary" type="submit" value="Оформить заказа"/>
          </fieldset>
        </form>
      </div>
    </div>
  )
}