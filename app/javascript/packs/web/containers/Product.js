import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions';
import Product from '../components/fullProduct/Product';

let ProductContainer = (props) => {
  let {createLineItem} = props.actions;
  let setCurrentPicture = props.actions.setFullCurrentPicture;
  let fetchCategory = props.actions.fetchCategory;

  let product = props.store.getIn(['fullProduct', 'product'])
  let currentPicture = props.store.getIn(['fullProduct', 'currentPicture'])
  let isLoading = props.store.getIn(['fullProduct', 'isLoading'])

  return <Product {...{fetchCategory, createLineItem, product, setCurrentPicture, currentPicture, isLoading}}/>

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
