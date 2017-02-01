import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions';

class App extends Component {
  render() {
    const { isGood } = this.props;
    const { updateTest } = this.props.appActions;
    return(
      <div>
        <input type="text" onChange={(e)=>{updateTest(e.target.value)}} value={isGood}/>
        hello is Good: {this.props.isGood} <br/>
        hello is Bad: {this.props.isBad}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isGood: state.get('isGood'),
    isBad: state.get('isBad')
  }
}

function mpaDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mpaDispatchToProps)(App)
