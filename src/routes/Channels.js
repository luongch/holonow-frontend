import React, { useState } from 'react';
import ChannelsList from '../components/ChannelsList';
import { useOutletContext } from "react-router-dom";

const Channels = (props) => {
    const [channels, setChannels] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [showProfile, sessionUser, setSessionUser] = useOutletContext();

    React.useEffect(() => {
        getChannels()
    },[])

    React.useEffect(() => {
        //if the user has a session then we need the favorites as well
        if(sessionUser.id && sessionUser.id !== "") {
            getFavorites()
        }
        
    },[sessionUser.id])

    React.useEffect(() => {
        console.log("rerendering, a channel has been added/removed from favorites")
    },[favorites])

    const getFavorites = async () => {
        let response = await fetch("/api/v1/channels/favorites");
        let favoritesList = await response.json();
        setFavorites(favoritesList.data)
    }

    const getChannels = async () => {
        let response = await fetch("/api/v1/channels");
        let channelList = await response.json()
        setChannels(channelList.data)
    }

    return (
        <div className='videoContainer'>
            <ChannelsList channels={channels} favorites={favorites} getFavorites={getFavorites}></ChannelsList>
        </div>
        
    )
}

export default Channels