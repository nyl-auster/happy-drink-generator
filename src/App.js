import React, { Component } from "react";
import Button from "./components/Button";
import generateHappyDrink from "./lib/happyDrinkGenerator";
import HappyDrink from "./components/HappyDrink";
import styled from "styled-components";
import "moment/locale/fr";
import moment from "moment";
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
    time: null,
    tweet: null,
    facebookMessage: null
  };
  handleClick = () => {
    const { space, time, tweet, facebookMessage } = generateHappyDrink();
    this.setState({
      space,
      time,
      tweet,
      facebookMessage
    });
  };
  render() {
    const { space, time, tweet, facebookMessage } = this.state;
    return (
      <Container>
        <Button onClick={this.handleClick}>
          Génére ton Happy Drink à Nantes !{" "}
        </Button>
        {space && time && <HappyDrink space={space} time={time} />}
        {tweet && (
          <div>
            <h3>Tweet</h3>
            <div>{tweet}</div>
          </div>
        )}
        {facebookMessage && (
          <div>
            <h3>Facebook</h3>
            <div> {facebookMessage}</div>
          </div>
        )}
      </Container>
    );
  }
}

export default App;
