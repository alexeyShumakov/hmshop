import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import Tether from 'tether';
import _ from 'lodash';

export default class Basket extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isShow: false };
    _.bindAll(this, 'show', 'hide', 'outSideClick');
  }

  outSideClick(e) {
    if(!findDOMNode(this.tTarget).contains(e.target)) {
      this.hide();
    }

  }

  componentWillMount(){
    document.addEventListener('click', this.outSideClick, false)
  }
  componentWillUnmount(){
    document.removeEventListener('click', this.outSideClick, false)
  }

  componentDidMount() {
    let { tTarget, tElement } = this;
    tTarget = findDOMNode(tTarget);
    tElement = findDOMNode(tElement);
    new Tether({
      element: tElement,
      target: tTarget,
      attachment: 'top right',
      targetAttachment: 'bottom right',
      offset: '-5px -18px'
    })
  }

  show() { this.setState({isShow: true}); }

  hide() { this.setState({isShow: false}); }

  render() {
    let { cart } = this.props;
    let { isShow } = this.state;
    return(
      <div className="basket">
        <div className='basket__icon' ref={(tTarget) => { this.tTarget = tTarget; }} >
          <i onClick={this.show} className="nav__icon fa fa-shopping-cart fa-lg" >
          </i>
          { this.props.cart.get('total_count') > 0 &&
            <span className='basket__counter'>
              <b>{this.props.cart.get('total_count')}</b>
            </span>
          }
        </div>
        <div
          className={isShow ? 'basket__content_show' : 'basket__content'}
          ref={(tElement) => { this.tElement = tElement; }}>
          cart!
        </div>
      </div>
    )
  }
}
