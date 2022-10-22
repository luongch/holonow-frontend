import React, { useState } from 'react';
import YoutubePlayer from '../components/YoutubePlayer';
import Message from '../components/Message';
import axiosInstance from '../api/axiosConfig';
import Pagination from '../components/Pagination';

const Archive = () => {
  const [isArchiveLoading, setIsArchiveLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [archive, setArchive] = useState([]);
  const [page, setPage] = useState(0);
  const [videoCount, setVideoCount] = useState();

  React.useEffect(() => {
    const getArchive = async (page) => {
      let params =  { 
        page
      };
      console.log("getting archive for page:" ,page)
      axiosInstance.get('/api/v1/videos/archived', {params})
      .then((response)=>{
        if(response.status === 200) {
          setArchive(response.data.data)
          setVideoCount(response.data.count);
          setIsArchiveLoading(false)                
        }
        else {
          setIsArchiveLoading(false);
          setIsError(true)
        }
      })
    }

    getArchive(page);
  }, [page]);

  

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
      <Message type={"error"} />
    )
  }

  return (
    <div className='main'>
      <div className="videoContainer">
        {isArchiveLoading ? <Message type={"loading"} /> : <ArchiveList archive={archive} />}
      </div>
      <Pagination videoCount={videoCount} page={page} setPage={setPage} ></Pagination>
    </div>
         
  )     
}

export default Archive;