import React from 'react';
import { useOutletContext, Navigate } from "react-router-dom";
import axios from 'axios'

const Logout = () => {
    const {baseUrl, sessionUser, setSessionUser} = useOutletContext();
    React.useEffect(() => {
        //only logout if there is a session
        if(sessionUser.id !== "") {
            console.log("there is a session")
            handleLogout()
        }
        else {
            console.log("there is no session")
        }        
    });
  
    //call logout endpoint
    const handleLogout = async () => {
        console.log("handleLogout")
        await axios(`${baseUrl}/api/v1/logout`, { method: "POST"});

        let emptySession = {
            id: ''
          }
        setSessionUser(emptySession)
        //call some kind of redirect?
        
    }
    return(
        <Navigate to="/login" replace={true} />
    )
}

export default Logout;