import React from 'react';
import Waypoint from 'react-waypoint';
import _ from 'lodash';

export default class ToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false}
    _.bindAll(this, 'setIinitalShow', 'toTop');
  }

  toTop() {
    window.scrollTo(0,0);
  }

  setIinitalShow(e) {
    if(_.isEmpty(e.previousPosition) && e.currentPosition == "above") {
      this.setState({show: true})
    }
  }

  render() {
    return(
      <div className='to-top'>
        <Waypoint
          onEnter={()=> {this.setState({show: false})}}
          onLeave={()=> {this.setState({show: true})}}
          onPositionChange={this.setIinitalShow}
        />
        {this.state.show &&
            <div onClick={this.toTop}>
              <i className='fa fa-lg fa-chevron-circle-up to-top__icon '></i>
            </div>
        }
      </div>
    )
  }
}
