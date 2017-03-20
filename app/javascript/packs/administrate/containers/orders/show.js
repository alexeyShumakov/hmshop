import Lazysizes from 'lazysizes';
import DocumentTitle from 'react-document-title';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../../actions';

import Order from '../../components/orders/show/order';

const component = (props) => {
  return(
    <DocumentTitle title='Заказ - Административная панель'>
      <Order {...props}/>
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
