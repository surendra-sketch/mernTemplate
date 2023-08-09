import React from "react";
import "./style.css";
import Fetchdata from "../Fetchdata/Fetchdata";
import Form from "../Form/Form";
const HeroSection = () => {
  return (
    <div className="hero-sec">
      <section className="hero">
        <Form />

        <div className="text">
          <Fetchdata />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
