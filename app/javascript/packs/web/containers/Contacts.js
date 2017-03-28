import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import Comp from '../components/info/Contacts';

import * as appActions from '../actions';

let Container = (props) => {
  return <Comp {...props}/>
}
function mapStateToProps(state) {
  return { store: state }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(appActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
