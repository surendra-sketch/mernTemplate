import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error">
      <div>
        <h1>Page Not Found !</h1>
      </div>

      <div>
        <br />
        <br />
        <br />
        <h3>
          <Link to="/">Go back to home</Link>
        </h3>
      </div>
    </div>
  );
};

export default Error;
