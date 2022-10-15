import '../styles/gifs.css';

const Loading = (props) => {
    return (
        <div className="gifContainer">
            <img className="gif" src="../../images/loading.gif" alt="loading gif"></img>
            <div className='message'>
                Loading...
            </div>
        </div>
    )
}

export default Loading