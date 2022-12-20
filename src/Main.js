import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pets from "./components/Pets";
import Rooms from "./components/Rooms";
const Main = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/pets" element={<Pets />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </Router>
  );
};

export default Main;
