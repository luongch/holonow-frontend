import React, { useState, Fragment } from 'react';
import Loading from '../components/Loading';
import YoutubePlayer from '../components/YoutubePlayer';
import '../styles/youtubeplayer.css';
import { useOutletContext } from "react-router-dom";

const Upcoming = () => {

  const [upcoming, setUpcoming] = useState([])
  const [isUpcomingLoading, setIsUpcomingLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const {baseUrl} = useOutletContext();

  React.useEffect(() => {
    const getUpcoming = async () => {
      let response = await fetch(`${baseUrl}/api/v1/videos/upcoming`)
      let upcoming = await response.json();
  
      if(response.status === 200) {
          setIsUpcomingLoading(false);
          setUpcoming(upcoming.data)
      }
      else {
        setIsUpcomingLoading(false);
        setIsError(true);
      } 
    }

    getUpcoming();
  }, [baseUrl]);

  

  const UpcomingStreamList = ({upcomingStreams}) => {
    const upcomingStreamsItems = upcomingStreams.map((upcoming)=>{
      return (
          <YoutubePlayer key={upcoming._id} video={upcoming}></YoutubePlayer>
      )
    })
    return (
      upcomingStreamsItems
    )
  }

  if(isError) {
    return(
      <h2>Error...</h2>
    )
  }
  return (
    <div className='videoContainer'>
      <>{isUpcomingLoading ? <Loading /> : <UpcomingStreamList upcomingStreams={upcoming} />}</>
    </div>
  )    
}

export default Upcoming;