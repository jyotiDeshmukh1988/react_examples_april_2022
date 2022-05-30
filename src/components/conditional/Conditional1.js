import React from "react";

export default function Conditional1() {
  const num = +prompt("Enter a number");

  return (
    <h3 style={num % 2 === 0 ? { color: "blue" } : { color: "red" }}>
      Entered Number {num} is {num % 2 === 0 ? "Even" : "Odd"}
    </h3>
  );
}

