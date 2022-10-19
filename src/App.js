import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import './styles/app.css';
import Navbar from "./components/Navbar";
import axiosInstance from './api/axiosConfig';


function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [sessionUser, setSessionUser] = useState({id:""});
  
  const toggleProfile = () =>{ 
    setShowProfile(!showProfile);
  }

  React.useEffect(()=>{
    axiosInstance.get('/api/v1/session')
    .then((res)=>{
      if(res.data) {
        setSessionUser(res.data.user)
      }
    })
  },[])
  
  return (
    <div className="app-container">
      <Navbar showProfile={showProfile} toggleProfile={toggleProfile}></Navbar>      
      <Sidebar ></Sidebar>
      <Outlet context={{sessionUser, showProfile, setSessionUser}}></Outlet>
    </div>
  );
}

export default App;