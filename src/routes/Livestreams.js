import React from 'react';

const Livestreams = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/v1/videos/live")
        .then((res) => res.json())
        .then((data) => {setData(data.data)});
    }, []);

    const LivestreamList = (props) => {
        const livestreams = props.livestreams;
        const livestreamItems = livestreams.map((livestream)=>{
          return <Livestream key={livestream._id} livestream={livestream}></Livestream>
        })
        return (
          <ul>{livestreamItems}</ul>
        )
      }
      
      const Livestream = (props) => {
        const {_id,title,id,author} = props.livestream;
        return (
          <li>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <a href={`https://www.youtube.com/watch?v=${id}`}>{`https://www.youtube.com/watch?v=${id}`}</a>
          </li>
        );
      }

      return (
        data.length == 0 ? <p>Loading</p> :<LivestreamList livestreams={data} />        
      )     
}

export default Livestreams;