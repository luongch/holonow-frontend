import React, { useState } from 'react';
import '../styles/youtubeplayer.css'
import LiveStats from "./LiveStats";
import ScheduledStart from "./ScheduledStart";
import LastAired from "./LastAired";
import axiosInstance from '../api/axiosConfig';
/**
 * Returns html element for the video depending on whether the video is live/upcoming/archived
 * @param {*} concurrentViewers 
 * @param {*} actualStartTime 
 * @param {*} scheduledStartTime 
 * @returns corresponding html element
 */
const getVideoStatus = (concurrentViewers, actualStartTime, scheduledStartTime) => {
    if(concurrentViewers) {
        return <LiveStats concurrentViewers={concurrentViewers}></LiveStats>
    }
    else if(!actualStartTime && scheduledStartTime) {
        return <ScheduledStart scheduledStartTime={scheduledStartTime}></ScheduledStart>        
    }
    else {
        return <LastAired actualStartTime={actualStartTime}></LastAired>
    }
}

const YoutubePlayer = (props) => {
    // add check for thumbnails
    const {id, title, author, concurrentViewers, actualStartTime, scheduledStartTime, channelId} = props.video;
    const {url, width, height} = props.video.thumbnails.medium;
    const [showVideo, setShowVideo] = useState(false);
    const [channel, setChannel] = useState();
    const [isChannelLoading, setIsChannelLoading] = useState(true);
    

    React.useEffect(() => {
        const getChannel = async () => {
            axiosInstance.get(`api/v1/channels/${channelId}`)
            .then((res)=> {
                if(res.status === 200) {                    
                    setChannel(res.data.data[0])
                } 
            })
        }
        getChannel()      
    },[channelId])

    React.useEffect(()=>{
        if(typeof channel !== 'undefined') {
            setIsChannelLoading(false)
        }
        
    },[channel])

    return (
        <div className="video">
            {showVideo ? (
                <iframe title={title} width={width} height={height}
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`} allow='autoplay'>
                </iframe>
                ) : (
                <div
                    className="videoThumbnail"

                    style={{
                        backgroundImage: `url(${url})`,
                        width,
                        height
                    }}
                    onClick={() => setShowVideo(true)}
                >
                <div className="playButton" />
                </div>                    
                )
            }
            <div className="videoCard">                
                {isChannelLoading ? null
                    :
                    <div className="profilePic">
                        <img alt={channel.title + "profile picture"} src={channel.thumbnail.url} />
                    </div>
                }                
                <div className='videoDetails'>
                    <div className="videoTitle">{title}</div>                 
                    <div>
                        <a href={`https://www.youtube.com/channel/${channelId}`}>{author}</a>
                    </div>
                    {getVideoStatus(concurrentViewers, actualStartTime, scheduledStartTime)}
                </div>                
            </div>         
        </div>
        
      );
}

export default YoutubePlayer;