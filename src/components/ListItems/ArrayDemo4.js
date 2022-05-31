import React from "react";
import users from "./users.json";

export default function ArrayDemo4() {
  return (
    <>
      <div className="container">
        <div className="row">
          {users.map((user) => (
            <div className="col-sm-4">
              <div
                style={{
                  border: "2px solid blue",
                  borderRadius: "10px",
                  margin: "5px",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
