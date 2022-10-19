import React, {useState, useContext} from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import './styles/app.css';
import Navbar from "./components/Navbar";
import axios from 'axios';
import { myContext } from './Context';
// axios.defaults.withCredentials = true;


function App() {
  const userObject = useContext(myContext);
  console.log("userObject", userObject);
  let emptySession = {
    id: ""
  }
  const [sessionUser, setSessionUser] = useState(emptySession);
  const [showProfile, setShowProfile] = useState(false);
  const [baseUrl, setBaseUrl] = useState("");
  
  const toggleProfile = () =>{ 
    setShowProfile(!showProfile);
  }
  const getSession = async () => {
    axios.get(`${baseUrl}/api/v1/session`, {withCredentials:true})
    .then((res)=>{
      if(res.data) {
        console.log("res.data", res.data.user)
        setSessionUser({...res.data.user})
      }
    })
    // let response = await fetch(`${baseUrl}/api/v1/session`);
    // let result = await response.json();  
    
    // if(result.user) {
    //   setSessionUser({...result.user})
    // }
    // console.log(sessionUser)
  }
  
  React.useEffect(()=>{
    console.log("getting session")
    getSession()
    console.log("sessionUser", sessionUser)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  React.useEffect(()=>{
    if(process.env.NODE_ENV === 'development') {
      // setBaseUrl('http://localhost:3001')
    }
    else {
      setBaseUrl('https://holonowapi.onrender.com')
    }
  },[])

  
  return (
    <div className="app-container">
      <Navbar sessionUser={sessionUser} showProfile={showProfile} toggleProfile={toggleProfile}></Navbar>      
      <Sidebar ></Sidebar>
      <Outlet context={{baseUrl, showProfile, sessionUser, setSessionUser}}></Outlet>
    </div>
  );
}

export default App;