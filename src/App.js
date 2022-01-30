import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import './styles/app.css';
import Navbar from "./components/Navbar";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const toggleSidebar = () =>{ 
    setShowSidebar(!showSidebar);
  }
  const toggleProfile = () =>{ 
    setShowProfile(!showProfile);
  }
  
  return (
    <div className="app-container">
      <Navbar showSidebar={showSidebar} toggleSidebar={toggleSidebar}></Navbar>
      <Outlet context={[showSidebar, showProfile]}></Outlet>
    </div>
  );
}

export default App;
