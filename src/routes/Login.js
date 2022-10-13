import React, { useState } from 'react';
import LoginDisplay from '../components/Login'

const Login = () => {    
    /**
     * Changes the image to make it look like the image was pressed
     */
    const handleMouseDown = async () => {   
        let url = "http://localhost:3001/api/v1/login/federated/google"
        window.open(url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
        document.getElementById("googleLoginImg").src = "../../images/btn_google_signin_dark_pressed_web.png";
        
        //you must navigate directly to the google login url otherwise you will gets a cors error
        //you cannot call a fetch to the api/v1/login/federated/google endpoint

        //need to add code here to determine if the user was logged in successfully?
    }
    /**
     * Change the image to make it look like the image was released
     */
    const handleMouseUp = () => {
        document.getElementById("googleLoginImg").src = "../../images/btn_google_signin_dark_normal_web.png";
    }

    return(
        <LoginDisplay handleMouseDown={handleMouseDown} handleMouseUp={handleMouseUp}></LoginDisplay>
    )
}

export default Login;