import React, { useState } from "react";

export default function ToggleDemo() {
  const [flag, setFlag] = useState(true);
  return (
    <>
      {flag ? <h1>This is a paragraph</h1> : null}
      <button onClick={()=>{setFlag(!flag)}}>{flag ? "HIDE" : "SHOW"}</button>
    </>
  );
}
