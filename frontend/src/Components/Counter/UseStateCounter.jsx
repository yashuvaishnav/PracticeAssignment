import React, { useState } from "react";
import { styled } from "styled-components";

export const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount((prev) => prev + 1);
  };
  const handleDec = () => {
    setCount((prev) => prev - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <MainDiv>
      <div>
        <h1>Count : {count}</h1>
        <button onClick={handleInc} disabled={count === 10}>
          INC
        </button>
        <button onClick={handleDec} disabled={count === 0}>
          DEC
        </button>
        <button onClick={handleReset} disabled={count === 0}>
          RESET
        </button>
      </div>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  border: 1px solid black;
`;
