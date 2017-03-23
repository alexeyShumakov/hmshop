import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import Tether from 'tether';
import _ from 'lodash';
import Immutable from 'immutable';

export default class Category extends React.Component {

  constructor(props) {
    super(props);
    this.state = { display: 'none' };
    _.bindAll(this, 'showImmediately', 'show', 'hide', 'showMenu', 'hideMenu');
    this.show = _.debounce(this.show, 500);
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
      targetAttachment: 'top left',
      targetOffset: '-5px 40px'
    })
  }

  show() { this.setState({display: 'block'}); }

  hide() { this.setState({display: 'none'}); }

  showImmediately() { this.setState({display: 'block'}); }

  showMenu() {
    this.hide.cancel();
    this.show();
  }

  hideMenu() {
    this.show.cancel();
    this.hide();
  }


  render() {
    let { category, fetchCategory, rootCategoryId } = this.props;
    let { display } = this.state;
    let style = { display: display };
    let selected = category.get('id') === rootCategoryId;
    let children = category.get('children') || Immutable.List([]);
    children = children.map(child => {
      let slug = child.get('slug');
      return(
        <li key={child.get('id')}>
          <Link
            to={`/categories/${slug}`}
            onClick={() => fetchCategory(slug)}
          >
            {child.get('title')}
          </Link>
        </li>
      )
    })
    return(
      <li>
        <div
          style={{backgroundImage: `url(${category.get('thumb_icon')})`}}
          ref={(tTarget) => { this.tTarget = tTarget; }}
          onClick={this.showImmediately}
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
          className={selected ? 'nav__icon nav__icon_selected' : 'nav__icon '}
          >
        </div>
        <div ref={(tElement) => { this.tElement = tElement; }} >
          <div
            className="nav-sub-categories"
            onMouseEnter={this.showMenu}
            onMouseLeave={this.hideMenu}
            style={style}
          >
            <b className='u-mb6'>
              <Link
                to={`/categories/${category.get('slug')}`}
                onClick={() => fetchCategory(category.get('id'))}
                >
                {category.get("title")}
              </Link>
            </b>
            <ul> {children} </ul>
          </div>
        </div>
      </li>
    )
  }
}
