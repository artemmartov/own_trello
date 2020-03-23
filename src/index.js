import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store";

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById("root")
  );
};

render(App); 
