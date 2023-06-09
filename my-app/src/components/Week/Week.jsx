import React from "react";
import moment from "moment";
import Day from "../Day/Day";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  // grid-template-row: repeat(24, 1fr);
  grid-gap: 1px;
  background: rgb(227 231 239);
`;
const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubtitleWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const SubtitleMonth = styled.div`
  display: grid;
`;
const DateOfWeek = styled.div`
  display: flex;
`;
const DayOfWeek = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Week() {
  moment.updateLocale("en", { week: { dow: 1 } });

  const startDay = moment().startOf("W").startOf("D");
  const endDay = moment().endOf("W").endOf("D");
  const fullWeek = [].map(() => day.add(1, "day").clone());
  const day = startDay.clone();

  while (!day.isAfter(endDay)) {
    fullWeek.push(day.clone());
    day.add(1, "day");
  }

  return (
    <Wrapper>
      <SubtitleWrapper>
        <SubtitleWeek>
          {fullWeek.map((dayItem) => (
            <DayOfWeek key={dayItem.format("DDMMYYYY")}>
              {dayItem.format("dd")}
              <DateOfWeek>{dayItem.format("D")}</DateOfWeek>
            </DayOfWeek>
          ))}
        </SubtitleWeek>
        <SubtitleMonth></SubtitleMonth>
      </SubtitleWrapper>
      <GridWrapper>
        {fullWeek.map(() => (
          <Day />
        ))}
      </GridWrapper>
    </Wrapper>
  );
}
