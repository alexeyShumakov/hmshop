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
      let item = this.props.item.set('count', count);
      this.props.update(item);
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
    let {item, position, destroy, update} = this.props;
    let id = item.get('id');
    let count = item.get('count');
    return(
      <tr>
        <td>{position}</td>
        <td>
          <img
            src={item.getIn(['product', 'thumb_cover'])}
            alt=""
            className='float-left order__image'
          />
          <div>
          <b>{item.getIn(['product', 'title'])}</b>
          <div>
            <span>кол-во: </span>
            <i className="control-icon fa fa-minus" onClick={()=>this.updateCount(count - 1)}></i>
            <input value={this.state.tmpCount}
              type="text"
              className='order__input'
              onChange={(e)=> this.updateTmpCount(e.target.value)}
              onBlur={()=>this.blurCountUpdate()}
            />
            <i className="control-icon fa fa-plus" onClick={()=>this.updateCount(count + 1)}></i>
          </div>
          </div>
        </td>
        <td>{item.getIn(['product', 'price'])}</td>
        <td>{item.get('total_price')}</td>
        <td><i className="control-icon fa fa-remove" onClick={()=> destroy(item)}></i></td>
      </tr>

    )
  }
}
