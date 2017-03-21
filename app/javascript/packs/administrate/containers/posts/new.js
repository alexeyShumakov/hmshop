import Lazysizes from 'lazysizes';
import DocumentTitle from 'react-document-title';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../../actions';

import NewPost from '../../components/posts/new/new';

const component = (props) => {
  return(
    <DocumentTitle title='Создать Новость - Административная панель'>
      <NewPost {...props}/>
    </DocumentTitle>
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

export default connect(mapStateToProps, mpaDispatchToProps)(component)
