import React, { useState, Fragment } from 'react';
import Loading from '../components/Loading';
import YoutubePlayer from '../components/YoutubePlayer';
import '../styles/youtubeplayer.css';
// import { useOutletContext } from "react-router-dom";
import axiosInstance from '../api/axiosConfig';

const Upcoming = () => {

  const [upcoming, setUpcoming] = useState([])
  const [isUpcomingLoading, setIsUpcomingLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // const {baseUrl} = useOutletContext();

  React.useEffect(() => {
    const getUpcoming = async () => {
      axiosInstance.get('/api/v1/videos/upcoming')
      .then((response)=>{
        console.log("response", response.status, response)
        if(response.status === 200) {
          setIsUpcomingLoading(false);
          setUpcoming(response.data.data)
        }
        else {
          setIsUpcomingLoading(false);
          setIsError(true);
        } 
      })
      // let response = await fetch(`/api/v1/videos/upcoming`)
      // let upcoming = await response.json();
  
      
    }

    getUpcoming();
  }, []);

  

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