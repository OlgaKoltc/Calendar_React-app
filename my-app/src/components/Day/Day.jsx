import React from "react";
import moment from "moment";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-gap: 1px;
`;

const CellWrapper = styled.div`
  display: flex;
  min-width: 40px;
  min-height: 40px;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export default function Day({ startDay }) {
  const hours = [...Array(24)];

  return (
    <Wrapper>
      {hours.map((_, index) => (
        <CellWrapper>{index}</CellWrapper>
      ))}
    </Wrapper>
  );
}
