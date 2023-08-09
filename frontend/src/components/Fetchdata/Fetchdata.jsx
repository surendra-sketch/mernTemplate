import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import DataCart from "./DataCart";
import "./style.css";
const Fetchdata = () => {
  const [dataa, setdata] = useState([]);

  useEffect(() => {
    setdata(data);
  }, []);

  return (
    <>
      <section className="mylist">
        {dataa.map((user) => {
          return <DataCart key={user.id} {...user} />;
        })}
      </section>
    </>
  );
};

export default Fetchdata;
