import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions';
import Product from '../components/fullProduct/Product';

let ProductContainer = (props) => {
  return <Product/>
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

export default connect(mapStateToProps, mpaDispatchToProps)(ProductContainer)
