import React, { useState, Fragment } from 'react';
import Loading from '../components/Loading';
import YoutubePlayer from '../components/YoutubePlayer';
import '../styles/youtubeplayer.css';
import axiosInstance from '../api/axiosConfig';

const Upcoming = () => {

  const [upcoming, setUpcoming] = useState([])
  const [isUpcomingLoading, setIsUpcomingLoading] = useState(true);
  const [isError, setIsError] = useState(false);  

  React.useEffect(() => {
    const getUpcoming = async () => {
      axiosInstance.get('/api/v1/videos/upcoming')
      .then((response)=>{
        if(response.status === 200) {
          setIsUpcomingLoading(false);
          setUpcoming(response.data.data)
        }
        else {
          setIsUpcomingLoading(false);
          setIsError(true);
        } 
      })
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