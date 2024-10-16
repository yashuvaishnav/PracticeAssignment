import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INC": {
      return state + action.payload;
    }
    case "DEC": {
      return state - action.payload;
    }
    case "RESET": {
      return state=action.payload;
    }
    default: {
      return state;
    }
  }
};
export const UseReducerCounter = () => {
  const [initialState, dispatch] = useReducer(reducer, 0);

  return <div>
    <h1>Count : {initialState}</h1>
    <button onClick={()=>{dispatch({type : "INC",payload : 1})}} disabled={initialState === 10}>INC</button>
    <button onClick={()=>{dispatch({type : "DEC",payload : 1})}} disabled={initialState === 0}>DEC</button>
    <button onClick={()=>{dispatch({type : "RESET",payload : 0})}} disabled={initialState === 0}>RESET</button>
  </div>;
};
