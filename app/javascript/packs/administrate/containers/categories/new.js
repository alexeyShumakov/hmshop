import Lazysizes from 'lazysizes';
import DocumentTitle from 'react-document-title';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../../actions';

import NewCategory from '../../components/categories/new/new';

const component = (props) => {
  return(
    <DocumentTitle title='Создать Категорию - Административная панель'>
      <NewCategory {...props}/>
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