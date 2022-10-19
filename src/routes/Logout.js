import React, { useContext } from 'react';
import { useOutletContext } from "react-router-dom";
import axios from 'axios'
import { myContext } from '../Context';

const Logout = () => {
    const {baseUrl} = useOutletContext();
    // const {baseUrl, sessionUser, setSessionUser} = useOutletContext();
    const userObject = useContext(myContext);
    console.log("userObject in logout component", userObject)
    React.useEffect(() => {
        //only logout if there is a session
        if(userObject) {
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
        axios.get(`${baseUrl}/api/v1/logout`, { method: "GET", withCredentials:true})
        .then((res) => {
            if (res.data === "successfully logged out") {
                window.location.href = "/login"
            }
        });

        // let emptySession = {
        //     id: ''
        //   }
        // setSessionUser(emptySession)
        //call some kind of redirect?
        
    }
    return(
        // <Navigate to="/login" replace={true} />
        <></>
    )
}

export default Logout;