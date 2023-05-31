import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Profile from "./pages/profile";
import LoanManage from "./pages/loan_manage";
import Signup from "./pages/signup";
import Login from "./pages/login";
import CreateProfile from "./pages/create_profile";

function App() {
  window.addEventListener("beforeunload", (event) => {
    localStorage.clear()
    console.log("Clear local storage");
  });

  return (
    <div className = "homepage">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/loan_manage" element={<LoanManage />} />
          <Route path="/signup/*" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create_profile" element={<CreateProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
