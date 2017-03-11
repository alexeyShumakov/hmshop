import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import Collection from '../components/collections/Show';

import * as appActions from '../actions';

let Container = (props) => {
  let title = props.store.getIn(['collections', 'collection', 'title'])
  return(
    <DocumentTitle title={`${title} - Купить набор в интернет-магазине HM-shop.ru`}>
      <Collection {...props}/>
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
