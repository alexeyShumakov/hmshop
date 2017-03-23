import React from 'react';
import {Link} from 'react-router';

let Ancestor = (props) => {
  return(
    <span>
      <Link
        className='breadcrumbs__item'
        onClick={props.fetch}
        to={`/categories/${props.id}`}>{props.title}</Link>
      <i className='breadcrumbs__item fa fa-angle-right'></i>
    </span>
  )
}
export default (props) => {
  return(
    <div className='breadcrumbs'>
      <span>
        <a className='breadcrumbs__item' href="/">Главная</a>
        <i className='breadcrumbs__item fa fa-angle-right'></i>
      </span>
      { props.node.get('ancestors').map((a)=>{
        let id = a.get('id');
          return(
            <Ancestor
              fetch={()=> props.fetchCategory(id)}
              key={id} id={a.get('slug')}
              title={a.get('title')} />
          )
        })

      }
      <span>{props.node.get('title')}</span>
    </div>
  )
}
