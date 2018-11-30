import "core-js/es6/map";
import "core-js/es6/set";

import * as React from "react";
import { createGlobalStyle } from "styled-components";
import Calculator from "../../components/Calculator";
import Header from "../../components/Header";

import global from "../../styles/global";
const GlobalStyle = createGlobalStyle`${global}`;

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <Calculator />
      </React.Fragment>
    );
  }
}

export default App;
