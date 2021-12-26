import React from 'react';
import YoutubePlayer from '../components/YoutubePlayer';

const Archive = () => {
  const [isArchiveLoading, setIsArchiveLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [archive, setArchive] = React.useState([]);

  React.useEffect(() => {
      getArchive();
  }, []);

  const getArchive = async () => {
    let response = await fetch("/api/v1/videos");
    let archiveList = await response.json();
    if(response.status === 200) {
      setIsArchiveLoading(false);
      setArchive(archiveList.data);
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
    isArchiveLoading ? <h1>Loading...</h1> : <ArchiveList archive={archive} />        
  )     
}

export default Archive;