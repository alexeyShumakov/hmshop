import Lazysizes from 'lazysizes';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions';

import Sidebar from '../components/sidebar';
import Nav from '../components/nav';

const App = (props) => {
  let { store, actions, children } = props;
  return(
      <div>
        <div className="row content__wrapper">
          <Sidebar/>
          <div className="column">
            <div className="container administrate__container">

              <div className="row">
                <div className="column u-px0">
                  <Nav/>
                </div>
              </div>

              <div className="row">
                <div className="column">
                  {children}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

  )
}

function mapStateToProps(state) {
  return {
    store: state
  }
}

function mpaDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mpaDispatchToProps)(App)
