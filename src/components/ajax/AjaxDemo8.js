import axios from "axios";
import React, { useState } from "react";

export default function AjaxDemo8() {
  const [name, setName] = useState("");
  
  const fetchData = async () => {
    const response = await axios.get(`https://api.github.com/users/${name}`);
    console.log(response.data);
  };

  return (
    <>
      <div>AjaxDemo8</div>
      <input
        name="name"
        placeholder="type a name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={fetchData}>Fetch data</button>
    </>
  );
}
