import React from "react";

export default function ArrayDemo2() {
  const employees = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 104, name: "deepak", sal: 8000, gender: "male" },
    { eId: 103, name: "reena", sal: 7000, gender: "female" },
    { eId: 102, name: "manoj", sal: 9000, gender: "male" },
  ];
  const headings = Object.keys(employees[0]);

  return (
    <>
      <div className="text-center">ArrayDemo2 (Array of objects)</div>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            {headings.map((heading, ind) => (
              <th key={ind}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.eId}>
              {/* <td>{emp.eId}</td>
              <td>{emp.name}</td>
              <td>{emp.sal}</td>
              <td>{emp.gender}</td> */}
              {Object.values(emp).map((val, ind) => (
                <td key={ind}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
