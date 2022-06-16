import React from "react";

const MyChild = function (props) {
  console.log("child rendered again");
  return <div>MyChild - a is {props.a}</div>;
};
export default React.memo(MyChild);
