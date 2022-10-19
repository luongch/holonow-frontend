import React, { useState } from 'react';
import YoutubePlayer from '../components/YoutubePlayer';
import Loading from '../components/Loading';
import Error from '../components/Loading';
import axiosInstance from '../api/axiosConfig';

const Archive = () => {
  const [isArchiveLoading, setIsArchiveLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [archive, setArchive] = useState([]);

  React.useEffect(() => {
    const getArchive = async () => {
      axiosInstance.get('/api/v1/videos/archived')
      .then((response)=>{
        if(response.status === 200) {
          setArchive(response.data.data)
          setIsArchiveLoading(false)                
        }
        else {
          setIsArchiveLoading(false);
          setIsError(true)
        }
      })
    }
      getArchive();
  }, []);

  

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
      <Error/>
    )
  }

  return (
    <div className="videoContainer">
      <>{isArchiveLoading ? <Loading/> : <ArchiveList archive={archive} />}</>              
    </div>     
  )     
}

export default Archive;