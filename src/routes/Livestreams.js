import React, { useState, Fragment } from 'react';
import Upcoming from './Upcoming'

const Livestreams = () => {
  const [isLiveLoading, setIsLiveLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [live, setLive] = useState([]);

  React.useEffect(() => {
      getLiveStreams();
  }, []);

  const getLiveStreams = async () => {
    const response = await fetch("/api/v1/videos/live")    
    const livestreams = await response.json();
    if(response.status === 200) {
      setIsLiveLoading(false);
      setLive(livestreams.data)
    }
    else {
      setIsLiveLoading(false);
      setIsError(true);
    }    
  }
  const LivestreamList = (props) => {
      const livestreams = props.livestreams;
      const livestreamItems = livestreams.map((livestream)=>{
        return <Livestream key={livestream._id} livestream={livestream}></Livestream>
      })
      return (
        <ul>{livestreamItems}</ul>
      )
    }
    
  const Livestream = (props) => {
    const {title,id,author} = props.livestream;
    return (
      <li>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <a href={`https://www.youtube.com/watch?v=${id}`}>{`https://www.youtube.com/watch?v=${id}`}</a>
        <iframe width="420" height="315"
          src={`https://www.youtube.com/embed/${id}`}>
        </iframe>
      </li>
    );
  }
  if(isError) {
    return(
      <h2>Error...</h2>
    )
  }  
  return (
    <Fragment>
      <>{isLiveLoading ? <h2>Loading livestreams...</h2> : <LivestreamList livestreams={live} />}</>        
      <div style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
      }}></div>
      <Upcoming></Upcoming>
    </Fragment>
  )     
}

export default Livestreams;