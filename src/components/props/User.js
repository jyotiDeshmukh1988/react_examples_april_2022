import React from "react";

export default function User(props) {
  const { name, email, address } = props.userob; // props de-structuring

  return (
    <div className="col-4">
      <div
        style={{
          border: "2px solid blue",
          margin: "10px",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Address: {address.city}</p>
      </div>
    </div>
  );
}
