import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import Tether from 'tether';
import _ from 'lodash';

export default class Category extends React.Component {

  constructor(props) {
    super(props);
    _.bindAll(this, 'fetchCategory');
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

  fetchCategory() {
    let { fetchCategory, category } = this.props;
    fetchCategory(category.get('id'));
  }

  render() {
    let { category } = this.props;
    return(
      <li>
        <Link
          ref={(tTarget) => { this.tTarget = tTarget; }}
          to={`/categories/${category.get('id')}`}
          onClick={this.fetchCategory}>
          <i className="nav__icon fa fa-heart-o fa-lg"></i>
        </Link>
        <div className='nav-sub-categories' ref={(tElement) => { this.tElement = tElement; }} >
          hello
        </div>
      </li>
    )
  }
}
