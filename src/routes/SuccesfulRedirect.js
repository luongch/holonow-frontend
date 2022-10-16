import React from 'react';

const SuccessfulRedirect = () => {
    React.useEffect(()=>{
        handleSuccessfulLogin();
    },[])

    /**
     * After successfully authenticating through google, the API will redirect to this component
     * Close the popup and redirect the parent window to the login page
     */
    const handleSuccessfulLogin = async () => {     
        console.log("handling login") 
        if(window.opener) {
            console.log("there is a window opener", window.opener.location.href)
            window.opener.location=window.opener.location.href;
            window.close()
        }
    }
    return (
        <div></div>
    )
}

export default SuccessfulRedirect