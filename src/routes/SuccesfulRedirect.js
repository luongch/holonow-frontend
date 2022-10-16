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
        if(window.opener) {
            window.opener.location=window.opener.location.href;
            window.close()
        }
    }
    return (
        <div></div>
    )
}

export default SuccessfulRedirect