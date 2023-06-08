import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;
const Title = styled.h1`
  text-align: start;
  color: black;
`;
const ButtonPlus = styled.button`
  color: red;
  border: none;
  font-size: 25px;
  background-color: white;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>Interview Calendar</Title>
      <ButtonPlus>+</ButtonPlus>
    </HeaderWrapper>
  );
}
