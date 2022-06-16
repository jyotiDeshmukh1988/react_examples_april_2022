import React, { useState } from "react";

export default function FormDemo3() {
  const initialState = {
    firstName: "",
    lastName: "",
    age: null,
    gender: "",
    sports: [
      { name: "cricket", isChecked: false },
      { name: "football", isChecked: false },
      { name: "tennis", isChecked: false },
    ],
    state: "",
    address: "",
  };
  const [userData, setUserDate] = useState(initialState);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(userData);
  };
  return (
    <>
      <div>FormDemo3</div>

      <form onSubmit={submitHandler}>
        firstName :
        <input
          name="firstName"
          value={userData.firstName}
          onChange={(e) => {
            setUserDate({ ...userData, firstName: e.target.value });
          }}
        />{" "}
        <br />
        lastName :
        <input
          name="lastName"
          value={userData.lastName}
          onChange={(e) => {
            setUserDate({ ...userData, lastName: e.target.value });
          }}
        />{" "}
        <br />
        age:
        <input
          type="number"
          value={userData.age}
          onChange={(e) => {
            setUserDate({ ...userData, age: e.target.value });
          }}
        />
        <br />
        Gender:
        <input
          name="gender"
          type="radio"
          value="male"
          onChange={(e) => {
            setUserDate({ ...userData, gender: e.target.value });
          }}
        />
        male
        <input
          name="gender"
          type="radio"
          value="female"
          onChange={(e) => {
            setUserDate({ ...userData, gender: e.target.value });
          }}
        />
        female
        <br />
        Sports:
        <input
          name="sports"
          type="checkbox"
          value="cricket"
          onChange={(e) => {
            if (e.target.checked) {
              let temp = userData["sports"][0];
              temp.isChecked = true;
              setUserDate({ ...userData, temp });
            } else {
              userData["sports"][0].isChecked = false;
              let temp = userData["sports"][0];
              temp.isChecked = true;
              setUserDate({ ...userData, temp });
            }
          }}
        />
        cricket
        <input name="sports" type="checkbox" value="football" />
        football
        <input name="sports" type="checkbox" value="tennis" />
        tennis <br />
        state:
        <select
          name="state"
          value={userData.state}
          onChange={(e) => {
            setUserDate({ ...userData, state: e.target.value });
          }}
        >
          <option>AP</option>
          <option>UP</option>
          <option>Odisha</option>
          <option>Bihar</option>
        </select>
        <br />
        address:
        <textarea
          name="address"
          value={userData.address}
          onChange={(e) => {
            setUserDate({ ...userData, address: e.target.value });
          }}
        ></textarea>
        <br />
        <input type="submit" value="submit" />
        <input type="reset" value="cancel" />
      </form>
    </>
  );
}
