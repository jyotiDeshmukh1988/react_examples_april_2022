import React from "react";

export default function ArrayDemo1() {
  const cars = ["tata", "honda", "maruti", "toyota", "hundai"];
  return (
    <>
      <div>ArrayDemo1</div>
      <ul>
        {cars.map((car, ind) => (
          <li key={ind}>
            {ind}-----{car}
          </li>
        ))}
      </ul>
    </>
  );
}
