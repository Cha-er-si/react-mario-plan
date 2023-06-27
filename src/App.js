import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create" element={<CreateProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
