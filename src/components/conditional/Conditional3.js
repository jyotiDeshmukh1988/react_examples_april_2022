import React from "react";
import Conditional1 from "./Conditional1";

export default function Conditional3() {
  const flag = false;

  // return <div>{flag ? <h1>Helllloooooo</h1> : null}</div>;
  return <div>{flag && <Conditional1 />}</div>;
}
