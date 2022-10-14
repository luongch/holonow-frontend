import '../styles/Channel.css'
import {FaYoutube, FaHeart} from 'react-icons/fa';
import axios from 'axios'
import React, { useState } from 'react';

const Channel = (props) => {
    let {channel, liked} = props
    // console.log("liked", liked)
    
    const [isFavorited,setIsFavorited] = useState(liked)    
    // console.log("isFavorited", isFavorited)

    React.useEffect(()=>{
        console.log("rerendering")
    }, [isFavorited])

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
            console.log("removing from favorites")
            let response = await axios.post("/api/v1/favorites/remove", {
                channelId: channel.id
            })
            console.log(response.data);
            console.log("removing from favorites setIsFavorited");
            setIsFavorited(!liked)
        }
        else {
            console.log("adding to favorites")
            let response = await axios.post("/api/v1/favorites/add", {
                channelId: channel.id
            })  
            console.log(response.data);
            console.log("adding from favorites setIsFavorited");
            setIsFavorited(!liked)
        }
              

        // let liked = !isFavorited;
        // setIsFavorited(!isFavorited)
        
        // let classList = document.getElementById(channel.id).classList
        // if(liked) {
        //     classList.remove("notFav")
        //     classList.add("fav")
        // }
        // else {
        //     classList.add("notFav")
        //     classList.remove("fav")
        // }
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
                    <div onClick={toggleFavorites} className={isFavorited ? "fav" : "notFav"}>
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