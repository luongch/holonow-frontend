
const LoginDisplay = (props) => {
    let {handleMouseDown, handleMouseUp} = props

    return (
        <div className="videoContainer">
            <div>
                <div className="">
                    <div>
                        <h4>Login</h4>                      
                        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                            <img id="googleLoginImg" src="../../images/btn_google_signin_dark_normal_web.png" alt="google sign in button"></img>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default LoginDisplay;