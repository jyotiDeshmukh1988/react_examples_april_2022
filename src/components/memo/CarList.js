import React from "react";

const CarList = (props) => {
  console.log("carlist render called");
  return (
    <>
      <div>CarList</div>
      <ul>
        {props.cars.map((car, ind) => (
          <li key={ind}>{car}</li>
        ))}
      </ul>
    </>
  );
};
export default React.memo(CarList);
