import React from "react";

import "./style.css";
const CloseMenuIcon = () => {
  return (
    <div className="icons">
      <img src="/images/Close.svg" alt="" />
    </div>
  );
};

const OpenMenuIcon = () => {
  return (
    <div className="icons">
      <img src="/images/OpenMenu.svg" alt="" />
    </div>
  );
};
const Delete = () => {
  return (
    <div className="icons  ">
      <img src="/images/delete.svg" alt="" />
    </div>
  );
};

const View = () => {
  return (
    <div className="icons  ">
      <img src="/images/view.svg" alt="" />
    </div>
  );
};

const Edit = () => {
  return (
    <div className="icons  ">
      <img src="/images/edit.svg" alt="" />
    </div>
  );
};

export { View, Delete, Edit, OpenMenuIcon, CloseMenuIcon };
