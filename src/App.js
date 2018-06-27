import React, { Component } from "react";
import Button from "./components/Button";
import generateHappyDrink from "./lib/happyDrinkGenerator";
import HappyDrink from "./components/HappyDrink";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  text-align: center;
`;

class App extends Component {
  state = {
    space: null,
    time: null
  };
  handleClick = () => {
    const { space, time } = generateHappyDrink();
    this.setState({
      space,
      time
    });
  };
  render() {
    const { space, time } = this.state;
    return (
      <Container>
        <Button onClick={this.handleClick}>
          Génére ton Happy Drink à Nantes !{" "}
        </Button>
        {space && time && <HappyDrink space={space} time={time} />}
      </Container>
    );
  }
}

export default App;
