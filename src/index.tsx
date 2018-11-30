import * as React from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader";

/*
  Main App Container
 */
import App from "./containers/App/App";

const HotApp = hot(module)(App);
render(<HotApp />, document.getElementById("reactContainer"));
