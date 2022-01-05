import { useState } from "react";
import styles from '../styles/youtubeplayer.module.css'
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
        return <div>
            <span className={styles.liveText}>
                Live Now •&nbsp;
            </span>
            <span>
             {concurrentViewers} watching
            </span>             
        </div>
    }
    else if(!actualStartTime && scheduledStartTime) {
        let minutes = Math.abs(moment().diff(scheduledStartTime, 'minutes'));
        let time = moment(scheduledStartTime).format('h:mma')
        if (minutes < 60) { //if it's less than 60 then just display the time in minutes
            return <div> Starts in {minutes} minutes ({time})</div>            
        }
        else if(minutes < 24*60 ) {  //if it's less than 24 hours then display it in hours            
            let hours = Math.ceil(minutes/60)            
            return <div> Starts in {hours} hours ({time})</div>
        }
        else {
            let date = moment(scheduledStartTime).format('D/M/YYYY')
            return <div> {date} ({time}) </div>
        }
    }
    else {
        let minutes = Math.abs(moment().diff(actualStartTime, 'minutes'));
        if (minutes < 60) { //if it's less than 60 then just display the time in minutes
            return <div> {minutes} minutes ago</div>            
        }
        else if(minutes < 24*60 ) {  //if it's less than 24 hours then display it in hours            
            let hours = Math.ceil(minutes/60)            
            return <div> {hours} hours ago</div>
        }
        else {
            let date = moment(actualStartTime).format('D/M/YYYY')
            return <div> {date} </div>
        }
    }
}
const YoutubePlayer = (props) => {
    // add check for thumbnails
    const {id, title, author, concurrentViewers, actualStartTime, scheduledStartTime, channelId} = props.video;
    const {url, width, height} = props.video.thumbnails.high;
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className={styles.video} style={{
            width,
            height:"452px" //better way to make the divs not overlap each other vertically?
        }}>
            {showVideo ? (
                <iframe title={title} width={width} height={height}
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`} allow='autoplay'>
                </iframe>
                ) : (
                <div
                    className={styles.image}
                    style={{
                        backgroundImage: `url(${url})`,
                        width,
                        height
                    }}
                    onClick={() => setShowVideo(true)}
                >
                <div className={styles.playButton} />
                </div>                    
                )
            }
            <div>
                <div className={styles.title}>{title}</div>                 
                <div>
                    <a href={`https://www.youtube.com/channel/${channelId}`}>{author}</a>
                </div>
                {getVideoStatus(concurrentViewers, actualStartTime, scheduledStartTime)}
            </div>         
        </div>
        
      );
}

export default YoutubePlayer;