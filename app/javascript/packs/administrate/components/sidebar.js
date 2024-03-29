import React from 'react';
import {Link} from 'react-router';

export default (props) => {
  return(
    <div className="sidebar">
      <div className="sidebar__title">
        <b>
          <a href="/administrate">
            <i className="fa fa-circle-o"></i> Магазин
          </a>
        </b>
      </div>

      <ul className='u-no-list-style'>
        <li>
          <Link to="/administrate/shop">
            <i className="fa fa-circle-o"></i> Данные о магазине
          </Link>
        </li>
        <li>
          <Link to="/administrate/products">
            <i className="fa fa-circle-o"></i> Продукты
          </Link>
        </li>
        <li>
          <Link to="/administrate/categories">
            <i className="fa fa-circle-o"></i> Категории
          </Link>
        </li>
        <li>
          <Link to="/administrate/orders">
            <i className="fa fa-circle-o"></i> Заказы
          </Link>
        </li>
        <li>
          <Link to="/administrate/collections">
            <i className="fa fa-circle-o"></i> Наборы
          </Link>
        </li>
        <li>
          <Link to="/administrate/banners">
            <i className="fa fa-circle-o"></i> Баннеры
          </Link>
        </li>
        <li>
          <Link to="/administrate/posts">
            <i className="fa fa-circle-o"></i> Посты
          </Link>
        </li>
      </ul>

    </div>
  )
}
