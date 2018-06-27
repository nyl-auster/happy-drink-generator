import React from "react";
import styled from "styled-components";
const Span = styled.span`
  background-image: linear-gradient(104deg, #38bfea, #3239e8);
  cursor: pointer;
  display: inline-block;
  padding: 2rem;
  color: white;
  font-weight: bold;
  font-size: 30px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 2rem;
`;

const Button = ({ children, onClick }) => {
  return <Span onClick={onClick}>{children}</Span>;
};

export default Button;
