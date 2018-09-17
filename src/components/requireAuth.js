/**
 * not leading capital letter to file name
 * -- indicates that we export by default a function instead of a class


BOILERPLATE CODE FOR HIGHER ORDER COMPONENT

import React, { Component } from "react";

export default ChildComponent => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponent />;
    }
  }
  return ComposedComponent;
};
*/

import React, { Component } from "react";
import { connect } from "react-redux";

/**
 * Handles authentication validation for selected child component
 */
export default ChildComponent => {
  class ComposedComponent extends Component {
    // component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        // have access to the .history object. Allows for programatical navigation
        this.props.history.push("/");
      }
    }

    // need to pass down the props down the component chain
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
