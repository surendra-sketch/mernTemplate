import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";
const ViewUser = ({ user }) => {
  //   const { name, email, password } = user;
  return (
    <div className="userr">
      <h1>view</h1>
      {/* <h1>{user.name}</h1>
      <h1>{user.email}</h1> */}
      <br />
      {/* <Link to="/">Go Home</Link> */}
    </div>
  );
};

export default ViewUser;
