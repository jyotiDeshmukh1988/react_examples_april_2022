import React from "react";

export default function Conditional2() {
  const num = +prompt("Enter a number");
  if (num % 2 === 0) {
    return <h3>Number {num} is Even</h3>;
  } else {
    return <h3>Number {num} is Odd</h3>;
  }
}
