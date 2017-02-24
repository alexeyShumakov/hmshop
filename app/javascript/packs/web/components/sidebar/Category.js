import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import Tether from 'tether';
import _ from 'lodash';

export default class Category extends React.Component {

  constructor(props) {
    super(props);
    this.state = { display: 'none' };
    _.bindAll(this, 'show', 'hide', 'showMenu', 'hideMenu');
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


  render() {
    let { category, fetchCategory } = this.props;
    let { display } = this.state;
    let style = { display: display };
    let children = category.get('children').map(child => {
      let id = child.get('id');
      return(
        <li key={child.get('id')}>
          <Link to={`/categories/${id}`} onClick={() => fetchCategory(id)} >
            {child.get('title')}
          </Link>
        </li>
      )
    })
    return(
      <li>
        <Link
          ref={(tTarget) => { this.tTarget = tTarget; }}
          to={`/categories/${category.get('id')}`}
          onClick={() => fetchCategory(category.get('id'))}
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
            <ul>{children}</ul>
          </div>
        </div>
      </li>
    )
  }
}
