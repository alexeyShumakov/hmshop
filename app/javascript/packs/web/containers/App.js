import Lazysizes from 'lazysizes';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions';
import Header from '../components/Header';
import Sidebar from '../components/sidebar/Sidebar';

class App extends Component {
  render() {
    let { store, actions, children } = this.props;
    return(
      <div>
        <Header
          setRootCategoryId={actions.setRootCategoryId}
          cart={store.get('cart')}
          actions={actions}
        />
        <div className="row">
          <Sidebar
            rootCategoryId={store.getIn(['category', 'root_category_id'])}
            categories={store.get('categories')}
            actions={actions}
          />
          {children}
        </div>
      </div>
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

export default connect(mapStateToProps, mpaDispatchToProps)(App)
