import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import './styles/app.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar></Navbar>
      {/* <Sidebar></Sidebar> */}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
