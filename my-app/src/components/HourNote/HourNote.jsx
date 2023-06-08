import React, { useState } from "react";
import styled from "styled-components";

const CellWrapper = styled.div``;

export default function HourNote() {
  const [empty, setEmpty] = useState("");

  const handleChange = () => {
    if (empty) {
      addNote();
    } else {
      addDelete();
    }
  };
  const addNote = () => {};
  const addDelete = () => {};

  return <CellWrapper onClick={handleChange}>note</CellWrapper>;
}
