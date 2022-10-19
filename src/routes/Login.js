import React from 'react';
import LoginDisplay from '../components/Login'

const Login = () => {    
    /**
     * Changes the image to make it look like the image was pressed
     */
    const handleMouseDown = async () => { 
        document.getElementById("googleLoginImg").src = "../../images/btn_google_signin_dark_pressed_web.png";
        let url ='';  
        //you must navigate directly to the google login url otherwise you will gets a cors error
        //you cannot call a fetch to the api/v1/login/federated/google endpoint
        if(process.env.NODE_ENV === 'development') {
            url = `http://localhost:3001/api/v1/login/federated/google`
          }
          else {
            url ='https://holonowapi.onrender.com/api/v1/login/federated/google'
          }
        window.open(url, '_self');        
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