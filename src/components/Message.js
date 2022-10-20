import '../styles/gifs.css';

const Message = (props) => {
    let {type} = props
    let gif = "";
    let message = "";

    switch(type) {
        case "loading":
            gif = "loading"
            message = "Loading..."
            break;
        case "noresults":
            //code
            gif = "noresults"
            message = "Looks like there's no streams right now, try again later."
            break;
        default:
            gif = "error"
            message = "404 Page not found"            
    }

    return (        
        <div className='gifContainer'>
            <img className="gif" src={`../../images/${gif}.gif`} alt={`${gif} gif`}></img>
            <div className='message'>
                {message}
            </div>
        </div>
    )
}

export default Message