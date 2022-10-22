import { useOutletContext } from "react-router-dom";
import React from 'react'

const LoginDisplay = (props) => {
    let {handleMouseDown, handleMouseUp} = props
    const {sessionUser} = useOutletContext();
    return (
        <div className="main">
            <div className="videoContainer">
                <div>
                    {sessionUser ?    
                        <div>Welcome back {sessionUser.username}</div>
                        :
                        <div>
                            <h4>Login</h4>                      
                            <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                                <img id="googleLoginImg" src="../../images/btn_google_signin_dark_normal_web.png" alt="google sign in button"></img>
                            </div>   
                        </div>
                    }
                                            
                </div>
            </div>
        </div>
        
    )
}

export default LoginDisplay;