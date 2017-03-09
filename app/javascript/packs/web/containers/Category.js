import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';

import * as appActions from '../actions';
import Category from '../components/showcase/Category';

class CategoryContainer extends Component {
  render() {
    let { store, actions, children, params } = this.props;
    return(
    <DocumentTitle title={`Купить ${store.getIn(['category', 'category', 'title'])} в интернет-магазине HM-shop.ru`}>
      <Category
        modalProduct={store.get('modalProduct')}
        products={store.get('products')}
        sortFilter={store.getIn(['filters', 'sortFilter'])}
        category={store.getIn(['category', 'category'])}
        isLoading={store.getIn(['category', 'isLoading'])}
        actions={actions}
      />
    </DocumentTitle>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)
