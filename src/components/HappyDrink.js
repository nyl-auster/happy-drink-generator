import React from "react";
import HappyDrinkSpace from "./HappyDrinkSpace";
import HappyDrinkTime from "./HappyDrinkTime";
import styled from "styled-components";
const Container = styled.div`
  margin: 5rem;
  color: #333;
`;

const HappyDrink = ({ space, time }) => {
  return (
    <Container>
      <h1>
        <HappyDrinkTime time={time} />
      </h1>
      <HappyDrinkSpace space={space} />
    </Container>
  );
};

export default HappyDrink;
