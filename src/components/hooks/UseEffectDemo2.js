import React, { useEffect, useState } from "react";

export default function UseEffectDemo2(props) {
  const [a, setA] = useState(10);
  const [b, setB] = useState(20);
  const [c, setC] = useState(30);

  useEffect(() => {
    console.log("use effect called while mounting/updating");
    return () => {
      console.log("use effect called while unmounting");
    };
  }, []);
  return (
    <>
      <div>UseEffectDemo1</div>
      <p>
        Initial values a:{a} b:{b} c:{c}
      </p>

      <button
        onClick={() => {
          setA(15);
        }}
      >
        update A
      </button>
      <button
        onClick={() => {
          setB(25);
        }}
      >
        update B
      </button>
      <button
        onClick={() => {
          setC(35);
        }}
      >
        update C
      </button>
    </>
  );
}
