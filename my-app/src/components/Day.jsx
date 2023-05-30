import React from "react";
import moment from "moment";


export default function Day() {
  const hours = [...Array(24)];
  console.log(hours);
  return (
    <div>
      {hours.map((..item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}
