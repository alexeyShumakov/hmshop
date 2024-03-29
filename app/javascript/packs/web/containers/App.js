import Lazysizes from 'lazysizes';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

class App extends Component {
  render() {
    let { store, actions, children } = this.props;
    return(
      <div>
        <Header actions={actions} store={store} />
        <div className="row">
          <Sidebar
            rootCategoryId={store.getIn(['category', 'root_category_id'])}
            collections={store.get('sidebar_collections')}
            categories={store.get('categories')}
            actions={actions}
          />
          <div className="container__wrapper">
            {children}
          </div>
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
