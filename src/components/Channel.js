import '../styles/Channel.css'
import {FaYoutube, FaHeart} from 'react-icons/fa';
import axiosInstance from '../api/axiosConfig';

const Channel = (props) => {
    let {channel, liked, getFavorites} = props;

    const simplifySubscribers = () => {
        let simpleSubs = ""
        if(channel.subscribers >= 1000000) {
            simpleSubs = channel.subscribers / 1000000 + "M subscribers"
        }
        else if (channel.subscribers >= 100000) {
            simpleSubs = channel.subscribers / 1000 + "K subscribers"
        }
        else {
            simpleSubs = channel.subscribers
        }
        return simpleSubs
    }

    const toggleFavorites = async () => {       
        
        if(liked) {
            console.log("removing from favorites", `/api/v1/favorites/remove`)
            let response = await axiosInstance.post(`/api/v1/favorites/remove`, {
                channelId: channel.id
            })
            console.log(response)
            getFavorites()
        }
        else {
            console.log("adding to favorites", `/api/v1/favorites/add`)
            let response = await axiosInstance.post(`/api/v1/favorites/add`, {
                channelId: channel.id
            })  
            console.log(response)
            getFavorites()
        }              
    }

    return (
        <div className='channel' >
            <div className="profilePic">
                <img alt={channel.title + "profile picture"} src={channel.thumbnail.url} />
            </div>
            <div className='channelInfo'>
                <div>{channel.title}</div>
                <div>{simplifySubscribers()}</div>
                <div className='iconTray'>
                    <div onClick={toggleFavorites} className={liked ? "fav" : "notFav"}>
                        <FaHeart size={25} className='icon' id={channel.id} />
                    </div>
                    <a href={`https://www.youtube.com/channel/${channel.id}`} target="_blank" rel="noreferrer">
                        <FaYoutube size={25} className='icon youtube' />
                    </a>
                </div>
                
                
            </div>

                   
            
            
        </div>
    )
}

export default Channel