import React, { useState, Fragment } from 'react';

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
          <UpcomingStream key={upcoming._id} upcoming={upcoming}></UpcomingStream>
      )
    })
    return (
      <ul>{upcomingStreamsItems}</ul>
    )
  }

  const UpcomingStream = (props) => {
    let {title, author, id} = props.upcoming
      return (
        <li>
          <h1>{title}</h1>
          <h2>{author}</h2>
          {/* <a href={`https://www.youtube.com/watch?v=${id}`}>{`https://www.youtube.com/watch?v=${id}`}</a> */}
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
    <Fragment>
      <>{isUpcomingLoading ? <h2>Loading upcoming...</h2> : <UpcomingStreamList upcomingStreams={upcoming} />}</>
    </Fragment>
  )    
}

export default Upcoming;