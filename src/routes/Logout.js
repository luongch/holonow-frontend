import React, { useContext } from 'react';
import { globalContext } from '../Context';
import axiosInstance from '../api/axiosConfig';

const Logout = () => {
    const userObject = useContext(globalContext);
    React.useEffect(() => {
        //only logout if there is a session
        if(userObject) {
            handleLogout()
        }      
    });
  
    //call logout endpoint
    const handleLogout = async () => {
        axiosInstance.get(`/api/v1/logout`, { method: "GET"})
        .then((res) => {
            if (res.data === "successfully logged out") {
                window.location.href = "/login"
            }
        });
        
    }
    return(
        <></>
    )
}

export default Logout;