import React, { useState, Fragment } from 'react';
import YoutubePlayer from '../components/YoutubePlayer';

const Livestreams = () => {
  const [isLiveLoading, setIsLiveLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [live, setLive] = useState([]);

  React.useEffect(() => {
      getLiveStreams();
  }, []);

  const getLiveStreams = async () => {
    const response = await fetch("/api/v1/videos/live");
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
      return <YoutubePlayer key={livestream._id} video={livestream}></YoutubePlayer>
    })
    return (
      livestreamItems
    )
  }

  if(isError) {
    return(
      <h2>Error...</h2>
    )
  }  
  return (
    <Fragment>
      <>{isLiveLoading ? <h2>Loading livestreams...</h2> : <LivestreamList livestreams={live} />}</>              
    </Fragment>
  )     
}

export default Livestreams;