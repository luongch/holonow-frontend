import React from 'react';

const Videos = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/v1/videos")
        .then((res) => res.json())
        .then((data) => {setData(data.data)});
    }, []);

    const VideoList = (props) => {
        const videos = props.videos;
        const videoItems = videos.map((video)=>{
          return <Video key={video._id} video={video}></Video>
        })
        return (
          <ul>{videoItems}</ul>
        )
      }
      
      const Video = (props) => {
        const {_id,title,id,author} = props.video;
        console.log("_id", _id)
        return (
          <li>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <a href={`https://www.youtube.com/watch?v=${id}`}>{`https://www.youtube.com/watch?v=${id}`}</a>
          </li>
        );
      }

      return (
        data.length == 0 ? <p>Loading</p> :<VideoList videos={data} />        
      ) 
     
    
}

export default Videos;