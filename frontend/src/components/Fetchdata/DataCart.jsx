import React from "react";
import "./style.css";
const DataCart = ({ name, age, id }) => {
  return (
    <div className="usercart">
      <p>Id : {id}</p>
      <h2>{name}</h2>
      <h1>Age : {age}</h1>
    </div>
  );
};

export default DataCart;
