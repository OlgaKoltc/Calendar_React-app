import React from "react";
import moment from "moment";
import Day from "../Day/Day";
import styled from "styled-components";

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-row: repeat(24, 1fr);
  background: "rgb(242, 236, 236)";
`;

export default function Week() {
  moment.updateLocale("en", { week: { dow: 1 } });

  const startDay = moment().startOf("W").startOf("D");
  const endDay = moment().endOf("W").endOf("D");
  const fullWeek = [];
  const day = startDay.clone();

  while (!day.isAfter(endDay)) {
    fullWeek.push(day.clone());
    day.add(1, "day");
  }

  return (
    <GridWrapper>
      {fullWeek.map(() => (
        <div>
          <Day />
        </div>
      ))}
    </GridWrapper>
  );
}
