import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import './styles/app.css';
import Navbar from "./components/Navbar";

function App() {
  const [sessionUser, setSessionUser] = useState({});
  const [showSidebar, setShowSidebar] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const toggleSidebar = () =>{ 
    setShowSidebar(!showSidebar);
  }
  const toggleProfile = () =>{ 
    setShowProfile(!showProfile);
  }
  const getSession = async () => {
    console.log("checking if there is a user session")
    let response = await fetch("/api/v1/session");
    let result = await response.json();  
    setSessionUser(result.user)  
    console.log(sessionUser)
  }
  
  React.useEffect(()=>{
    getSession()
  },[])

  
  return (
    <div className="app-container">
      <Navbar></Navbar>
      <Sidebar showSidebar={showSidebar}></Sidebar>
      <Outlet context={[showSidebar, showProfile, sessionUser]}></Outlet>
    </div>
  );
}

export default App;
