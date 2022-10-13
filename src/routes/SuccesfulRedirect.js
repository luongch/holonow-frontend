import React from 'react';
import { useOutletContext } from "react-router-dom";

const SuccessfulRedirect = () => {
    const [showSidebar, showProfile, sessionUser, setSessionUser] = useOutletContext();
    React.useEffect(()=>{
        handleSuccessfulLogin();
    },[])

    /**
     * After successfully authenticating through google, the API will redirect to this component
     * Close the popup and redirect the parent window to the login page
     */
    const handleSuccessfulLogin = async () => {        
        if(window.opener) {
            window.opener.location="http://localhost:3000/login";
            window.close()
        }
    }
    return (
        <div></div>
    )
}

export default SuccessfulRedirect