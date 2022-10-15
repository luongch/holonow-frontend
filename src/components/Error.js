import '../styles/gifs.css';

const Error = (props) => {
    return (
        <div className="videoContainer">
            <div className='gifContainer'>
                <img className="gif" src="../../images/error.gif" alt="error gif"></img>
                <div className='message'>
                    404 Page Not Found
                </div>
            </div>
            
        </div>
    )
}

export default Error