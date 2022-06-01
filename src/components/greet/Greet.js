import React from "react";

export default function Greet(props) {
  return (
    <div>
      Hi {props.name} , {props.msg}
    </div>
  );
}
