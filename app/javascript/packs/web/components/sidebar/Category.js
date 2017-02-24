import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import Tether from 'tether';
import _ from 'lodash';

export default class Category extends React.Component {

  constructor(props) {
    super(props);
    this.state = { display: 'none' };
    _.bindAll(this, 'fetchCategory', 'show', 'hide', 'showMenu', 'hideMenu');
    this.show = _.debounce(this.show, 300);
    this.hide = _.debounce(this.hide, 200);
  }

  componentDidMount() {
    let { tTarget, tElement } = this;
    tTarget = findDOMNode(tTarget);
    tElement = findDOMNode(tElement);
    new Tether({
      element: tElement,
      target: tTarget,
      attachment: 'top left',
      targetAttachment: 'top right'
    })
  }

  show() { this.setState({display: 'block'}); }

  hide() { this.setState({display: 'none'}); }

  showMenu() {
    this.hide.cancel();
    this.show();
  }

  hideMenu() {
    this.show.cancel();
    this.hide();
  }

  fetchCategory() {
    let { fetchCategory, category } = this.props;
    fetchCategory(category.get('id'));
  }

  render() {
    let { category } = this.props;
    let { display } = this.state;
    let style = { display: display };
    return(
      <li>
        <Link
          ref={(tTarget) => { this.tTarget = tTarget; }}
          to={`/categories/${category.get('id')}`}
          onClick={this.fetchCategory}
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
          >
          <i className="nav__icon fa fa-heart-o fa-lg"></i>
        </Link>
        <div className='container' ref={(tElement) => { this.tElement = tElement; }} >
          <div
            className="nav-sub-categories"
            onMouseEnter={this.showMenu}
            onMouseLeave={this.hideMenu}
            style={style}
          >
            hello
          </div>
        </div>
      </li>
    )
  }
}
