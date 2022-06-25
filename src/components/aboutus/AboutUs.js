import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  const func1 = () => {
    // do something then go to home page
    alert("Do something....");
    // now navigate to home
    navigate("/home");
  };
  return (
    <>
      <div>AboutUs</div>
      <a href="https://www.youtube.com/watch?v=GiyL4KFRNBA" target="_blank">
        youtube React
      </a>
      <br />
      <a href="/home">go to home page</a> <br />
      <Link to="/home">go to home</Link> <br />
      <button onClick={func1}>DO Something And go to home page</button>
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button> &nbsp;
      <button onClick={() => navigate(1)}>Go Next</button>
    </>
  );
}
