import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';

import * as appActions from '../actions';
import Basket from '../components/basket/Basket';

const BasketContainer = (props) => {
  return (
    <DocumentTitle title="HM-shop.ru - корзина и оформление покупки">
      <Basket {...props} />
    </DocumentTitle>
  )
}
function mapStateToProps(state) { return { store: state } }
function mapDispatchToProps(dispatch) {return { actions: bindActionCreators(appActions, dispatch) } }

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer)
