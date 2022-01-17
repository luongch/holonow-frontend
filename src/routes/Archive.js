import React, { useState, Fragment } from 'react';
import YoutubePlayer from '../components/YoutubePlayer';
import styles from '../styles/youtubeplayer.module.css'

const Archive = () => {
  const [isArchiveLoading, setIsArchiveLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [archive, setArchive] = useState([]);

  React.useEffect(() => {
      getArchive();
  }, []);

  const getArchive = async () => {
    let response = await fetch("/api/v1/videos/archived");
    let archiveList = await response.json();

    if(response.status === 200) {
      setArchive(archiveList.data)
      setIsArchiveLoading(false)                
    }
    else {
      setIsArchiveLoading(false);
      setIsError(true)
    }
  }

  const ArchiveList = (props) => {
    const archive = props.archive;
    const archiveItems = archive.map((archiveItem)=>{
      return <YoutubePlayer key={archiveItem._id} video={archiveItem}></YoutubePlayer>
    })
    return (
      archiveItems
    )    
  }

  if(isError) {
    return(
      <h2>Error...</h2>
    )
  }
  return (
    <div className={styles.videoContainer}>
      <>{isArchiveLoading ? <h2>Loading archived streams...</h2> : <ArchiveList archive={archive} />}</>              
    </div>     
  )     
}

export default Archive;