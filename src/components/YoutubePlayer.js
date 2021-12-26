import { Fragment, useState } from "react";
import styles from '../styles/styles.module.css'

const YoutubePlayer = (props) => {
    const {id, title, author, concurrentViewers} = props.video;
    const {url, width,height} = props.video.thumbnails.standard;
    const [showVideo, setShowVideo] = useState(false);

    return (
        <Fragment>
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
        </Fragment>
        
      );
}

export default YoutubePlayer;