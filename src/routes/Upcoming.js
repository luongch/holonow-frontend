import React, { useState, Fragment } from 'react';
import YoutubePlayer from '../components/YoutubePlayer';
import styles from '../styles/youtubeplayer.module.css'

const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([])
  const [isUpcomingLoading, setIsUpcomingLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  React.useEffect(() => {
      getUpcoming();
  }, []);

  const getUpcoming = async () => {
    let response = await fetch("/api/v1/videos/upcoming")
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
    <div className={styles.videoContainer}>
      <>{isUpcomingLoading ? <h2>Loading upcoming...</h2> : <UpcomingStreamList upcomingStreams={upcoming} />}</>
    </div>
  )    
}

export default Upcoming;