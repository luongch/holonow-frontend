import React, { useState } from 'react';
import YoutubePlayer from '../components/YoutubePlayer';
import NoResults from '../components/NoResults';
import Loading from '../components/Loading';
import '../styles/youtubeplayer.css';
// import { useOutletContext } from "react-router-dom";
import axiosInstance from '../api/axiosConfig';

const Livestreams = () => {
  const [isLiveLoading, setIsLiveLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [live, setLive] = useState([]);
  // const {baseUrl} = useOutletContext();
  

  React.useEffect(() => {
    const getLiveStreams = async () => {
      // const response = await fetch(`${baseUrl}/api/v1/videos/live`);
      // const livestreams = await response.json();
      axiosInstance.get('/api/v1/videos/live')
      .then((response)=>{
        console.log("response", response.status, response)
        if(response.status === 200) {
          setIsLiveLoading(false);
          setLive(response.data.data)
        }
        else {
          setIsLiveLoading(false);
          setIsError(true);
        }   
      })
       
    }

    getLiveStreams();
  }, []);
  
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