import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function AjaxCRUD() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [employee, setEmployee] = useState({});
  const [selectedEmp, setSelectedEmp] = useState({});
  const [isEdit, setisEdit] = useState(false);

  const fetchEmployees = async () => {
    setIsLoading(true);
    const employees = await axios.get("http://localhost:4000/employees");
    setEmployees(employees.data);
    setIsLoading(false);
  };
  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:4000/employees/${id}`);
    Swal.fire("DELETED", "Employee Deleted Successfully", "success");
    fetchEmployees();
  };
  const addEmployee = async () => {
    await axios.post("http://localhost:4000/employees", employee);
    Swal.fire("ADDED", "Employee Added Successfully", "success");
    fetchEmployees();
  };
  const editEmployee = (emp) => {
    setisEdit(true);
    console.log(emp);
    setSelectedEmp(emp);
  };
  const updateData = async () => {
    await axios.patch(
      `http://localhost:4000/employees/${selectedEmp.id}`,
      selectedEmp
    );
    Swal.fire("UPDATED", "Employee Updated Successfully", "success");
    setisEdit(false);
    fetchEmployees();
  };
  return (
    <>
      <div className="text-center bg-primary text-white">AjaxCRUD</div>
      <button onClick={fetchEmployees}>Fetch Employees</button>
      <hr />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp) => (
                    <tr key={emp.id}>
                      <td>{emp.id}</td>
                      <td>{emp.first_name}</td>
                      <td>{emp.last_name}</td>
                      <td>{emp.email}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteEmployee(emp.id);
                          }}
                        >
                          DEL
                        </button>
                        &nbsp;
                        <button className="btn btn-primary">VIEW</button>&nbsp;
                        <button
                          className="btn btn-secondary"
                          onClick={() => {
                            editEmployee(emp);
                          }}
                        >
                          EDIT
                        </button>
                        &nbsp;
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          {!isEdit ? (
            <div className="col-sm-4">
              first_name:
              <input
                placeholder="enter first name"
                name="first_name"
                onChange={(e) => {
                  setEmployee({ ...employee, first_name: e.target.value });
                }}
              />
              <br />
              <br />
              last_name:
              <input
                placeholder="enter last name"
                name="last_name"
                onChange={(e) => {
                  setEmployee({ ...employee, last_name: e.target.value });
                }}
              />
              <br />
              <br />
              Email:
              <input
                placeholder="enter email"
                name="email"
                onChange={(e) => {
                  setEmployee({ ...employee, email: e.target.value });
                }}
              />
              <br />
              <br />
              <button onClick={addEmployee} className="btn btn-primary">
                Add Employee
              </button>
            </div>
          ) : (
            <div className="col-sm-4">
              first_name:
              <input
                value={selectedEmp.first_name}
                name="first_name"
                onChange={(e) => {
                  setSelectedEmp({
                    ...selectedEmp,
                    first_name: e.target.value,
                  });
                }}
              />
              <br />
              <br />
              last_name:
              <input
                value={selectedEmp.last_name}
                name="last_name"
                onChange={(e) => {
                  setSelectedEmp({ ...selectedEmp, last_name: e.target.value });
                }}
              />
              <br />
              <br />
              Email:
              <input
                value={selectedEmp.email}
                name="email"
                onChange={(e) => {
                  setSelectedEmp({ ...selectedEmp, email: e.target.value });
                }}
              />
              <br />
              <br />
              <button onClick={updateData}>SAVE UPDATED DATA</button>
              <br />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
