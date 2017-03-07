import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';

import * as appActions from '../actions';
import Product from '../components/fullProduct/Product';

let ProductContainer = (props) => {
  let {createLineItem} = props.actions;
  let setCurrentPicture = props.actions.setFullCurrentPicture;
  let fetchCategory = props.actions.fetchCategory;

  let product = props.store.getIn(['fullProduct', 'product'])
  let currentPicture = props.store.getIn(['fullProduct', 'currentPicture'])
  let isLoading = props.store.getIn(['fullProduct', 'isLoading'])

  return(
    <DocumentTitle title={`${product.get('title')} - купить в интернет-магазине HM-shop.ru`}>
      <Product {...{fetchCategory, createLineItem,
          product, setCurrentPicture, currentPicture, isLoading}}/>
    </DocumentTitle>
  )
}

function mapStateToProps(state) {
  return {
    store: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
