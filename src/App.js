import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import './styles/app.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
