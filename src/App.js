import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Recomended from "./Rocomended/Recomended";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Login from "./Page/Login/Login";
import Signup from "./Page/Signup/Signup";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <Navigation />

          <Routes>
            <Route exact path="/" element={<Recomended />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
