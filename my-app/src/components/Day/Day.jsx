import React from "react";
import moment from "moment";
import styled from "styled-components";

const Wrapper = styled.section`
  background: papayawhip;
  // display: grid;
  // grid-template-row: repeat(24, 1fr);
`;

export default function Day() {
  const hours = [...Array(24)];

  return (
    <Wrapper>
      {hours.map((_, index) => (
        <div>{index}</div>
      ))}
    </Wrapper>
  );
}
