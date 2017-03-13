import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import Posts from '../components/posts/Index';

import * as appActions from '../actions';

let Container = (props) => {
  return(
    <DocumentTitle title={`Блог - интернет-магазин HM-shop.ru`}>
      <Posts {...props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Container)
