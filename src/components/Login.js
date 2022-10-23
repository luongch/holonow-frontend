import { useOutletContext } from "react-router-dom";
import React from 'react'
import Message from "./Message";
import '../styles/login.css'

const LoginDisplay = (props) => {
    let {handleMouseDown, handleMouseUp} = props
    const {sessionUser} = useOutletContext();
    return (
        <div className="main">
            <div className="videoContainer">
                {sessionUser ?      
                    <Message type="welcomeback"></Message>
                    :
                    <div className="loginContainer">
                        <h4>Login</h4>                      
                        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                            <img id="googleLoginImg" src="../../images/btn_google_signin_dark_normal_web.png" alt="google sign in button"></img>
                        </div>   
                        
                    </div>
                }
            </div>
        </div>
        
    )
}

export default LoginDisplay;