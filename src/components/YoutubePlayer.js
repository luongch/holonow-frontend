import { useState } from "react";
import '../styles/youtubeplayer.css'
import LiveStats from "./LiveStats";
import ScheduledStart from "./ScheduledStart";
import LastAired from "./LastAired";

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
    console.log(props.video)
    const {id, title, author, concurrentViewers, actualStartTime, scheduledStartTime, channelId} = props.video;
    const {url, width, height} = props.video.thumbnails.medium;
    const [showVideo, setShowVideo] = useState(false);

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
                <div>
                    {/* youtube profile pic here */}
                    {/* can't put youtube profile pic because it costs too much quota
                    I would need to call the channel api which gets expensive due to the amount of channels */}                    
                </div>
                <div>
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