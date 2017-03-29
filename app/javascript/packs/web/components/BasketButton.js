import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

export default class BasketButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, isAdded: false };
    _.bindAll(this, 'add', 'outSideClick');
  }

  outSideClick(e) {
    let isAdded = this.state.isAdded;
    const el = this.container;
    if(!el.contains(e.target) && isAdded) this.setState({isAdded: false});
  }

  componentWillMount(){
    document.addEventListener('click', this.outSideClick, false)
  }
  componentWillUnmount(){
    document.removeEventListener('click', this.outSideClick, false)
  }

  add() {
    let {create, productId} = this.props;
    this.setState({isLoading: true});
    create(productId).then(()=>{
      this.setState({isLoading: false, isAdded: true});
    })
  }

  render() {
    let {klassName, clickCallback} = this.props;
    let {isLoading, isAdded} = this.state;
    let button =
      <button onClick={this.add} className={klassName} >
        Добавить в корзину
        { isLoading && <i className="fa fa-circle-o-notch fa-spin fa-fw"></i> }
      </button>

    if(isAdded){
      button =
        <Link
          to='/cart'
          onClick={clickCallback}
          className={`button button-outline ${klassName}`}>
          Перейти в корзину
        </Link>
    }
    return(
      <div ref={ref => {this.container = ref}}>{button}</div>
    )
  }
}
