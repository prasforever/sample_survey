import React, { Component } from "react";
import { connect } from "react-redux";

import { loadAction } from "../actions/actions";

import "./style.css";

class App extends Component {
  render() {
    return <div className="App">Sample Survey</div>;
  }
}

const mapStateToProps = ({ loadAction }) => ({
  loadAction
});

const mapDispatchToProps = dispatch => ({
  loadAction: () => dispatch(loadAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
