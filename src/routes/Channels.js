import React, { useState } from 'react';
import ChannelsList from '../components/ChannelsList';
import { useOutletContext } from "react-router-dom";

const Channels = (props) => {
    const [channels, setChannels] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const {baseUrl, sessionUser} = useOutletContext();

    React.useEffect(() => {
        const getChannels = async () => {
            let response = await fetch(`${baseUrl}/api/v1/channels`);
            let channelList = await response.json()
            setChannels(channelList.data)
        }
        getChannels()
        
    },[baseUrl])

    React.useEffect(() => {
        console.log("sessionUSer",sessionUser.id)
        
        //if the user has a session then we need the favorites as well
        if(sessionUser.id && sessionUser.id !== "") {
            // console.log("user has a session")
            getFavorites()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[sessionUser.id])

    React.useEffect(() => {
        console.log("rerendering, a channel has been added/removed from favorites")
    },[favorites])

    const getFavorites = async () => {
        if(sessionUser.id && sessionUser.id !== "") {
            let response = await fetch(`${baseUrl}/api/v1/channels/favorites`);
            let favoritesList = await response.json();
            setFavorites(favoritesList.data)
        }
    }

    return (
        <div className='videoContainer'>
            <ChannelsList channels={channels} favorites={favorites} getFavorites={getFavorites}></ChannelsList>
        </div>
        
    )
}

export default Channels