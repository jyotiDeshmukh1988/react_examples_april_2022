import React from "react";

export default function ArrayDemo1() {
  const cars = ["tata", "honda", "maruti", "toyota", "hundai"];

  const addNewCar = function () {
    cars.push("BMW");
    console.log(cars);
  };
  
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
      <button onClick={addNewCar}>push a new car</button>
    </>
  );
}
