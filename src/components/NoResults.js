import '../styles/gifs.css';

const NoResults = (props) => {
    return (
        <div className="gifContainer">
            <img className="gif" src="../../images/noresults.gif" alt="no results gif"></img>
            <div className='message'>
                Looks like there's no streams right now, try again later.
            </div>
        </div>
    )
}

export default NoResults