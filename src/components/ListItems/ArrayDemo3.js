import React from "react";
import users from "./users.json";

export default function ArrayDemo3() {
  //   const filteredUsers = users.filter((user) => user.id > 5);
  return (
    <>
      <div className="text-center">ArrayDemo3 (User List from json file)</div>
      <input type="search" />
      
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>city</th>
            <th>phone</th>
            <th>website</th>
            <th>company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
