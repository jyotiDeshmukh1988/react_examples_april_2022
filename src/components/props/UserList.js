import React from "react";
import users from "../ListItems/users.json";
import User from "./User";

export default function UserList() {
  return (
    <>
      <h3>User list</h3>
      <div className="container">
        <div className="row">
          {users.map((userObj) => (
            <User userob={userObj}></User>
          ))}
        </div>
      </div>
    </>
  );
}
