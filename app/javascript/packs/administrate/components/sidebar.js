import React from 'react';
import {Link} from 'react-router';

export default (props) => {
  return(
    <div className="sidebar">
      <div className="sidebar__title">
        <b>
          <a href="/administrate">
            <i className="fa fa-circle-o"></i> HM-shop.ru
          </a>
        </b>
      </div>

      <ul className='u-no-list-style'>
        <li>
          <a href="/administrate/products">
            <i className="fa fa-circle-o"></i> Продукты
          </a>
        </li>
        <li>
          <a href="/administrate/categories">
            <i className="fa fa-circle-o"></i> Категории
          </a>
        </li>
        <li>
          <a href="/administrate/orders">
            <i className="fa fa-circle-o"></i> Заказы
          </a>
        </li>
        <li>
          <a href="/administrate/collections">
            <i className="fa fa-circle-o"></i> Наборы
          </a>
        </li>
        <li>
          <Link to="/administrate/banners">
            <i className="fa fa-circle-o"></i> Баннеры
          </Link>
        </li>
        <li>
          <a href="/administrate/posts">
            <i className="fa fa-circle-o"></i> Посты
          </a>
        </li>
      </ul>

    </div>
  )
}
