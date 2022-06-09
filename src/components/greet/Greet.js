import React from "react";
import PropTypes from "prop-types";

export default function Greet({ name, msg = "Default Message", children,flag }) {
  return (
    <div>
      Hi {name} , {msg} <br />
      {children} <br />
      {flag ? <h1>Helllllooooooooooo</h1> : null}
      <hr/>
    </div>
  );
}
Greet.propTypes = {
  name: PropTypes.string,
  msg: PropTypes.string,
  children: PropTypes.element,
};
