import React, { useState } from 'react';
import YoutubePlayer from '../components/YoutubePlayer';
import NoResults from '../components/NoResults';
import Loading from '../components/Loading';
import '../styles/youtubeplayer.css';
import { useOutletContext } from "react-router-dom";

const Livestreams = () => {
  const [isLiveLoading, setIsLiveLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [live, setLive] = useState([]);
  const {baseUrl} = useOutletContext();
  

  React.useEffect(() => {
    const getLiveStreams = async () => {
      const response = await fetch(`${baseUrl}/api/v1/videos/live`);
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

    getLiveStreams();
  }, [baseUrl]);
  
  const LivestreamList = (props) => {
    const livestreams = props.livestreams;
    
    if(livestreams.length === 0) {
      return <NoResults></NoResults>
    } 
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
    <div className='videoContainer'>
      <>{isLiveLoading ? <Loading /> : <LivestreamList className="videoContainer" livestreams={live} />}</>              
    </div>
  )     
}

export default Livestreams;