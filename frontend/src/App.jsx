import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Footer,
  HeroSection,
  Navbar,
  Update,
  Work,
  Error,
  ViewUser,
  UpdateUser,
} from "./components";

import "./app.css";
const App = () => {
  return (
    <>
      <Router>
        <main className="main">
          <section className="nav">
            <Navbar />
          </section>
          <section className="base-style">
            <Routes>
              <Route exact path="/" element={<HeroSection />} />
              <Route exact path="/update" element={<Update />} />
              <Route exact path="/work" element={<Work />} />
              <Route exact path="/view" element={<ViewUser />} />
              <Route exact path="/updateuser" element={<UpdateUser />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </section>
          <section>
            <Footer />
          </section>
        </main>
      </Router>
    </>
  );
};

export default App;

// fetchapidata from backend folder comp/FetchApiData
