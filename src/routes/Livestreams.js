import React, { useState, Fragment } from 'react';

const Livestreams = () => {
  const [isLiveLoading, setIsLiveLoading] = useState(true);
  const [isUpcomingLoading, setIsUpcomingLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [live, setLive] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  React.useEffect(() => {
      getLiveStreams();
      getUpcoming();
  }, []);

  const getLiveStreams = async () => {
    const response = await fetch("/api/v1/videos/live")
    const livestreams = await response.json();
    if(livestreams.success) {
      setIsLiveLoading(false);
      setLive(livestreams.data)
    }
    else {
      setIsLiveLoading(false);
      setIsError(true);
    }    
  }
  const getUpcoming = async () => {
    const response = await fetch("/api/v1/videos/upcoming");
    const upcoming = await response.json();
    if(upcoming.success) {
      setIsUpcomingLoading(false);
      setUpcoming(upcoming.data)
    }
    else {
      setIsUpcomingLoading(false);
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
        <>{isUpcomingLoading ? <h2>Loading upcoming...</h2> : <LivestreamList livestreams={upcoming} />}</>        
      </Fragment>
      
      
      
    )     
}

export default Livestreams;