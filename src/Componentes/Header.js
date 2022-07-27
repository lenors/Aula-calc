import React, { Component } from "react";
import styled from "styled-components";

const Corpo = styled.div`
  background-color: red;
  color: white;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    text-align: center;
    font-size: 20px;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const List = styled.li`
  &:hover {
    transform: scale(110%);
    cursor: pointer;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <Corpo>
        <h1>Melhora calc das turmas</h1>
        <nav>
          <ul>
            <List>Inico</List>
            <List>Sobre</List>
            <List>Contatos</List>
          </ul>
        </nav>
      </Corpo>
    );
  }
}
