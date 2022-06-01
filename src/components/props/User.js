import React from "react";

export default function User(props) {
  return (
    <div className="col-4">
      <div style={{ border: "2px solid blue", margin: "10px",borderRadius:'10px' }}>
        <p>{props.userob.name}</p>
        <p>{props.userob.email}</p>
        <p>{props.userob.address.city}</p>
      </div>
    </div>
  );
}
