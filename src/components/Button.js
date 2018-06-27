import React from "react";
import styled from "styled-components";

const Span = styled.span`
  background-image: linear-gradient(104deg, #38bfff, #3239e8);
  cursor: pointer;
  display: inline-block;
  padding: 2rem;
  color: white;
  font-weight: bold;
  font-size: 30px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 2rem;
  box-shadow: 0 10px 30px -6px black;
  &:active {
    box-shadow: 0 5px 5px -6px black;
  }
`;

const Button = ({ children, onClick }) => {
  return <Span onClick={onClick}>{children}</Span>;
};

export default Button;
