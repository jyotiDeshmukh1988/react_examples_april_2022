import React from "react";
import myStyles from "./Footer1.module.css";
import "./Footer2.css";

export default function Footer() {
  return (
    <>
      <div className={`${myStyles.class1} ${myStyles.myFooter}`}>Footer</div>
      <div className="myFooter ">another footer</div>
    </>
  );
}
