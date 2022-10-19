// import { useOutletContext } from "react-router-dom";
import { myContext } from '../Context';
import React, { useContext } from 'react'

const LoginDisplay = (props) => {
    let {handleMouseDown, handleMouseUp} = props
    // const {sessionUser} = useOutletContext();
    const userObject = useContext(myContext);
    console.log("userObject in login component", userObject)
    return (
        <div className="videoContainer">
            <div>
                <div className="">
                    <div>
                        {userObject ?    
                        /* {sessionUser._id && sessionUser._id !== '' ?  */
                            <div>Welcome back {userObject.username}</div>
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