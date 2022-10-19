import React, {useState} from "react";
// import React, {useState, useContext} from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import './styles/app.css';
import Navbar from "./components/Navbar";
// import { globalContext } from './Context';
import axiosInstance from './api/axiosConfig';


function App() {
  // const userObject = useContext(globalContext);
  const [showProfile, setShowProfile] = useState(false);
  const [sessionUser, setSessionUser] = useState({id:""});
  console.log("after setting sessionUser state", sessionUser);

  
  const toggleProfile = () =>{ 
    setShowProfile(!showProfile);
  }
  // const getSession = async () => {
  //   axiosInstance.get('/api/v1/session', {withCredentials:true})
  //   .then((res)=>{
  //     if(res.data) {
  //       console.log("res.data", res.data.user)
  //       setSessionUser(res.data.user)
  //     }
  //   })
  //   // let response = await fetch(`${baseUrl}/api/v1/session`);
  //   // let result = await response.json();  
    
  //   // if(result.user) {
  //   //   setSessionUser({...result.user})
  //   // }
  //   // console.log(sessionUser)
  // }
  
  console.log("sessionUser is", sessionUser)
  React.useEffect(()=>{
    console.log("getting session")
    // getSession()
    axiosInstance.get('/api/v1/session')
    .then((res)=>{
      if(res.data) {
        console.log("res.data", res.data.user)
        setSessionUser(res.data.user)
      }
    })
    
    
  },[])
  
  React.useEffect(()=>{
    console.log("did the sessionUser get set?", sessionUser)
  })
  return (
    <div className="app-container">
      <Navbar showProfile={showProfile} toggleProfile={toggleProfile}></Navbar>      
      <Sidebar ></Sidebar>
      <Outlet context={{sessionUser, showProfile, setSessionUser}}></Outlet>
    </div>
  );
}

export default App;