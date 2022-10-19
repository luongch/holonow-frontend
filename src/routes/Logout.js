import React, { useContext } from 'react';
// import { useOutletContext } from "react-router-dom";
import { globalContext } from '../Context';
import axiosInstance from '../api/axiosConfig';

const Logout = () => {
    // const {setSessionUser} = useOutletContext();
    const userObject = useContext(globalContext);
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
        axiosInstance.get(`/api/v1/logout`, { method: "GET"})
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