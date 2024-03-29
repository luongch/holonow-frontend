import '../styles/gifs.css';
import { useOutletContext } from 'react-router-dom';

const Message = (props) => {
    let {type} = props;
    let {sessionUser} = useOutletContext();
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
        case "nofavorites":
            gif = "nofavorites"
            message = "Looks like you don't have any favorites yet, head over to Channels to find your favorite idols"
            break;
        case "welcomeback":
            gif = "welcomeBack"
            message = `Welcome back ${sessionUser.username}!`
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