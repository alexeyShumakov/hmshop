import React from 'react';
import _ from 'lodash';

export default class LineItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tmpCount: props.item.get('count') }
    _.bindAll(this, 'updateCount', 'updateTmpCount', 'blurCountUpdate')
  }
  updateCount(number){
    number = _.toInteger(number);
    if(_.isInteger(number)) {
      let count = _.clamp(number, 1, 99)
      this.props.update(this.props.item.get('id'), count);
      this.setState({tmpCount: count})
    }
  }
  updateTmpCount(input) {
    if(_.isEmpty(input)) {
      this.setState({tmpCount: input})
    } else {
      this.updateCount(input);
    }
  }

  blurCountUpdate() {
    if(_.isEmpty(this.state.tmpCount)) {
      this.setState({tmpCount: this.props.item.get('count')})
    }
  }

  render() {
    let {item, position, destroy, update, openModal, fetchProduct} = this.props;
    let id = item.get('id');
    let count = item.get('count');
    return(
      <tr>
        <td>{position}</td>
        <td>
          <img
            onClick={()=>{ openModal(true); fetchProduct(item.getIn(['product', 'id'])); }}
            src={item.getIn(['product', 'thumb_cover'])}
            alt=""
            className='float-left full-basket__image'
          />
          <div>
          <b>{item.getIn(['product', 'title'])}</b>
          <div>
            <span>кол-во: </span>
            <i className="fa fa-minus" onClick={()=>this.updateCount(count - 1)}></i>
            <input value={this.state.tmpCount}
              type="text"
              className='full-basket__input'
              onChange={(e)=> this.updateTmpCount(e.target.value)}
              onBlur={()=>this.blurCountUpdate()}
            />
            <i className="fa fa-plus" onClick={()=>this.updateCount(count + 1)}></i>
          </div>
          </div>
        </td>
        <td>{item.getIn(['product', 'price'])}</td>
        <td>{item.get('total_price')}</td>
        <td><i className="fa fa-remove" onClick={()=> destroy(id)}></i></td>
      </tr>

    )
  }
}
