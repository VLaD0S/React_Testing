// Creating the redux provider (and store) as a reusable component, to be used from anywhere in the app

import React from "react";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import reducers from "reducers";

export default props => {
  const store = createStore(
    reducers,
    props.initialState,
    applyMiddleware(reduxPromise)
  );

  return (
    // creatStore takes the reducers and an object as an initial state.
    <Provider store={store}>{props.children}</Provider>
  );
};
