import React from "react";
import moment from "moment";
import Day from "./Day";

const Wrapper = styled.section`
  display: grid;

  background: papayawhip;
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

  console.log(fullWeek);
  return <Day />;
}
