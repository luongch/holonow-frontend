import { useOutletContext } from "react-router-dom";
import { globalContext } from '../Context';
import React, { useContext } from 'react'

const LoginDisplay = (props) => {
    let {handleMouseDown, handleMouseUp} = props
    const {sessionUser} = useOutletContext();
    const {userObject} = useContext(globalContext);
    console.log("userObject in login component", userObject)
    console.log("sessionUser in login component", sessionUser)
    return (
        <div className="videoContainer">
            <div>
                <div className="">
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
        </div>
        
    )
}

export default LoginDisplay;