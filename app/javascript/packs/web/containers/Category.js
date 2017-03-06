import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions';
import Category from '../components/showcase/Category';

class CategoryContainer extends Component {
  render() {
    let { store, actions, children, params } = this.props;
    return(
      <Category
        modalProduct={store.get('modalProduct')}
        products={store.get('products')}
        category={store.getIn(['category', 'category'])}
        actions={actions}
      />
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
