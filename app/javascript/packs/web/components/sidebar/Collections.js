import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import Tether from 'tether';
import _ from 'lodash';

export default class Collection extends React.Component {

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
    let { collections, fetchCollection, fetchCollections } = this.props;
    let { display } = this.state;
    let style = { display: display };
    collections = collections.map(item => {
      let id = item.get('id');
      return(
        <li key={item.get('id')}>
          <Link
            to={`/collections/${id}`}
            onClick={() => fetchCollection(id)}
          >
            {item.get('title')}
          </Link>
        </li>
      )
    })
    return(
      <li className='nav__collections'>
        <div
          ref={(tTarget) => { this.tTarget = tTarget; }}
          onClick={this.showImmediately}
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
          className='nav__icon'
          >
            <i className="nav__icon fa fa-cogs fa-lg"></i>
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
                to={`/collections`}
                onClick={fetchCollections}
                >
                Наборы
              </Link>
            </b>
            <ul> {collections} </ul>
          </div>
        </div>
      </li>
    )
  }
}
