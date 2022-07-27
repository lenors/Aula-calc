import React from "react";
import "../styles.css";

export default class Main extends React.Component {
  state = {
    n1: "",
    n2: "",
    result: 0
  };

  Change = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  Change2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  Somar = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 + n2,
      n1: "",
      n2: ""
    });
  };

  sub = () => {
    this.setState({
      result: this.state.n1 - this.state.n2,
      n1: "",
      n2: ""
    });
  };

  /*  exemplo = () =>{
    this.setState({
      n1: this.state.n1 = 1
    })
  } */

  render() {
    return (
      <>
        <input type="number" value={this.state.n1} onChange={this.Change} />
        <input type="number" value={this.state.n2} onChange={this.Change2} />
        <button onClick={this.Somar}>Somar</button>
        <button onClick={this.sub}>subtrair</button>
        <p>{this.state.result}</p>
      </>
    );
  }
}
