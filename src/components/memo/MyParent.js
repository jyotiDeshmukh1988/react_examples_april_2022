import React, { useCallback, useState } from "react";
import MyChild from "./MyChild";

export default function MyParent() {
  const [a, setA] = useState(10);
  const [b, setB] = useState(20);

  const f1 = useCallback(() => {
    alert("i am f1");
  }, []);

  return (
    <>
      <div>
        MyParent - a is {a} b is {b}
      </div>
      <button onClick={() => setA(15)}>update A data</button>
      <button onClick={() => setB(25)}>update B data</button>
      <hr />
      <MyChild a={a} f1={f1}></MyChild>
    </>
  );
}
