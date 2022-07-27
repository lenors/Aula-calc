import React, { Component } from "react";
import Header from "./Componentes/Header.js";
import Main from "./Componentes/Main.js";
import "./styles.css";

export default class Calc extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}
