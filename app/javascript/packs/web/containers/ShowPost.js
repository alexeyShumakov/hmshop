import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import Post from '../components/posts/Show';

import * as appActions from '../actions';

let Container = (props) => {
  let title = props.store.getIn(['posts', 'post', 'title'])
  return(
    <DocumentTitle title={`${title} - интернет-магазин ${props.store.getIn(['shop', 'title'])}`}>
      <Post {...props}/>
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
