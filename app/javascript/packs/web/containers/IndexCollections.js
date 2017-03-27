import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import Collections from '../components/collections/Index';

import * as appActions from '../actions';

let CollectionsContainer = (props) => {
  return(
    <DocumentTitle title={ `Купить наборы в интернет-магазине ${props.store.getIn(['shop', 'title'])}` }>
      <Collections {...props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsContainer)
