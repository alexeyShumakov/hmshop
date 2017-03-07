import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';

import * as appActions from '../actions';
import Home from '../components/home/Home';

const HomeContainer = (props) => {
  return (
    <DocumentTitle title="HM-shop.ru - интернет-магазин декупажа и декора">
      <Home {...props} />
    </DocumentTitle>
  )
}
function mapStateToProps(state) { return { store: state } }
function mapDispatchToProps(dispatch) {return { actions: bindActionCreators(appActions, dispatch) } }

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
