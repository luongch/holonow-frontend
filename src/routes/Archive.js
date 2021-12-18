import React from 'react';

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
      return <Archive key={archiveItem._id} archiveItem={archiveItem}></Archive>
    })
    return (
      <ul>{archiveItems}</ul>
    )
  }    
  const Archive = (props) => {
    const {title,id,author} = props.archiveItem;
    return (
      <li>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <iframe width="420" height="315"
          src={`https://www.youtube.com/embed/${id}`}>
        </iframe>
      </li>
    );
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