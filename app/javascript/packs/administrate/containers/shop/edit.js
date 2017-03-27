import Lazysizes from 'lazysizes';
import DocumentTitle from 'react-document-title';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../../actions';

import EditShop from '../../components/shop/edit/edit';

const component = (props) => {
  return(
    <DocumentTitle title='Редактировать Магазин - Административная панель'>
      <EditShop {...props}/>
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
