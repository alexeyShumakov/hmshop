import React from 'react';

export default (props) => {
  return(<li className='basket-line-item'>
      <table>
        <tbody>
          <tr>
            <td className='basket-line-item__img'>
              <img className='float-left' src={props.lineItem.getIn(['product', 'thumb_cover'])} alt=""/>
              <ul className='float-left u-no-list-style'>
                <li> {props.lineItem.getIn(['product', 'title'])} </li>
                <li> <span>кол-во:</span> <span>{props.lineItem.get('count')}</span> </li>
              </ul>
            </td>
            <td>
              {props.lineItem.getIn(['product', 'price'])}
            </td>
          </tr>
        </tbody>
      </table>
    </li>)
}
