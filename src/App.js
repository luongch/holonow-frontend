import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import './styles/app.css';
import Navbar from "./components/Navbar";

function App() {
  let emptySession = {
    id: ""
  }
  const [sessionUser, setSessionUser] = useState({emptySession});
  const [showSidebar, setShowSidebar] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const toggleSidebar = () =>{ 
    setShowSidebar(!showSidebar);
  }
  const toggleProfile = () =>{ 
    setShowProfile(!showProfile);
  }
  const getSession = async () => {
    let response = await fetch("/api/v1/session");
    let result = await response.json();  
    
    if(result.user) {
      setSessionUser({...result.user})
    }
  }
  
  React.useEffect(()=>{
    getSession()
  },[sessionUser.id])

  
  return (
    <div className="app-container">
      <Navbar sessionUser={sessionUser} showProfile={showProfile} toggleProfile={toggleProfile}></Navbar>      
      <Sidebar showSidebar={showSidebar}></Sidebar>
      <Outlet context={[showSidebar, showProfile, sessionUser, setSessionUser]}></Outlet>
    </div>
  );
}

export default App;