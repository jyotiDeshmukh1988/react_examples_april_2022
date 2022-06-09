import React, { useState } from "react";

export default function StateDemo4() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevState) => {
        console.log(prevState)
        return prevState + 1
    });
    // setCount(count + 1);
  };
  const increment5 = () => {
    increment();
    increment();
    increment();
    increment();
    increment();
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment5}>Increment By 5</button>
    </div>
  );
}
