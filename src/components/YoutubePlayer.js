import { useState } from "react";
import '../styles/youtubeplayer.css'
import LiveStats from "./LiveStats";
import ScheduledStart from "./ScheduledStart";
import LastAired from "./LastAired";
const moment = require('moment')

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

    return (
        <div className="video" 
        // style={{
        //     width,
        //     // height:height+95 //better way to make the divs not overlap each other vertically?
        // }}
        >
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
            <div>
                <div className="videoTitle">{title}</div>                 
                <div>
                    <a href={`https://www.youtube.com/channel/${channelId}`}>{author}</a>
                </div>
                {getVideoStatus(concurrentViewers, actualStartTime, scheduledStartTime)}
            </div>         
        </div>
        
      );
}

export default YoutubePlayer;