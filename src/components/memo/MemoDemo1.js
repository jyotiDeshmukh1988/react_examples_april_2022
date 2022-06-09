import React, { useState } from "react";
import CarList from "./CarList";

export default function MemoDemo1() {
  const [cars, setCars] = useState(["tata", "honda"]);
  const [count, setCount] = useState(0);

  return (
    <>
      <div>MemoDemo1 - count is {count}</div>
      <button onClick={()=>{setCount(count+1)}}>update counter</button>
      <button onClick={()=>{setCars([...cars,'maruti'])}}>add a new cars</button>
      <hr />
      <CarList cars={cars}></CarList>
    </>
  );
}
