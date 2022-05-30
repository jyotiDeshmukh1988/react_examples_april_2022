import React from "react";

export default function Demo1() {
  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }
  let user = {
    firstName: "sanjay",
    lastName: "samantra",
  };
  return (
    <>
      <div>This is Demo1 component</div>
      <div>Current React version is {React.version}</div>
      <div>my name is {user.firstName + " " + user.lastName}</div>
      <div>my name is {formatName(user)}</div>
      <div>my name is {2 + 15 - (3 * 6) / 2}</div>
    </>
  );
}
