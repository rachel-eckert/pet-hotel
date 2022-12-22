import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pets from "./components/Pets";
import Rooms from "./components/Rooms";
import SinglePet from "./components/SinglePet";
import SingleRoom from "./components/SingleRoom";
import NewPet from "./components/NewPet";
import NewRoom from "./components/NewRoom";
import Home from "./components/Home";
const Main = () => {
  return (
    <Router className="main">
      <Navbar />
      <Routes>
        <Route path="/pets" element={<Pets />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/" element={<Home />} />
        <Route path="/pets/:id" element={<SinglePet />} />
        <Route path="/rooms/:id" element={<SingleRoom />} />
        <Route path="/addpet" element={<NewPet />} />
        <Route path="/addroom" element={<NewRoom />} />
      </Routes>
    </Router>
  );
};

export default Main;
