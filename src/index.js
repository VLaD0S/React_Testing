//required
import React from "react";
import ReactDOM from "react-dom";
import Root from "Root";
import App from "components/App";

ReactDOM.render(
  // createReducers(reducers, state), where state is an object
  <Root>
    <App />
  </Root>,
  document.querySelector("#root")
);
