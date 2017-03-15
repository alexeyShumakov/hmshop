import Lazysizes from 'lazysizes';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions';

const App = (props) => {
  let { store, actions, children } = props;
  return(
      <div>
        <h1> i am app</h1>
        <b>{store.getIn(['products', 'hello'])}</b> <br/>
        <button onClick={actions.hello}>click</button>
        {children}
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
