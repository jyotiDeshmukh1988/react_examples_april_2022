import React, { useState } from "react";

export default function Demo2() {
  const [name, setName] = useState("sanjay");

  setTimeout(() => {
    setName("rahul");
  }, 3000);

  console.log('render called');
  
  return <div>Demo2 - {name}</div>;
}
