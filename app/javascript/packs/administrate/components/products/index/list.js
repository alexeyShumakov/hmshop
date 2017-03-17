import React from 'react';
import {Link} from 'react-router';
import Product from './product';
export default (props) => {
  const products = props.store.getIn(['products', 'products'])
  const {destroyProduct, fetchProducts} = props.actions;
  return(
    <div>
      <div className='control-buttons float-right'>
        <Link
          to='/administrate/products/new'
          className="button button-large">
          Новый Продукт
        </Link>
      </div>
      <h2>Продукты</h2>
      <div className="clearfix"></div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>название</th>
            <th>цена</th>
            <th>изобр.</th>
            <th>действия</th>
          </tr>
        </thead>
        <tbody>
          { !products.isEmpty() && products.map((product)=>{
            const key = product.get('id');
            let destroy = () => destroyProduct(key).then(() => fetchProducts());
            return <Product {...{key, product, destroy}} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}
