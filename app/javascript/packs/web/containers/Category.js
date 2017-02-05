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
        products={store.get('products')}
        category={store.get('category')}
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

function mpaDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mpaDispatchToProps)(CategoryContainer)
