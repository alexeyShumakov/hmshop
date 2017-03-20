import React from 'react';

export default (props) => {
  const {search, keyword, action, setKeyword, products} = props;
  const handleChange = (e) => {
    setKeyword(e.target.value);
    search(e.target.value);
  }
  const handleAction = (product) => {
    action(product)
    setKeyword('');
    search('');
  }
  return(
    <div className='search-products'>
      <input placeholder='Поиск продуктов' type="text" onChange={handleChange} value={keyword}/>
      <ul className='u-no-list-style search-products__products'>
        { products.map((product)=> {
            return(
              <li
                className='search-products__product'
                key={product.get('id')}
                onClick={() => handleAction(product) }
              >
                <img src={product.get('thumb_cover')} alt=""/>
                <span>{product.get('title')}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
