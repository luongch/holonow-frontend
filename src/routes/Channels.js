import React, { useState, useContext } from 'react';
import ChannelsList from '../components/ChannelsList';
import { useOutletContext } from "react-router-dom";
import { myContext } from '../Context';

const Channels = (props) => {
    const [channels, setChannels] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const {baseUrl} = useOutletContext();
    const userObject = useContext(myContext)

    React.useEffect(() => {
        const getChannels = async () => {
            let response = await fetch(`${baseUrl}/api/v1/channels`);
            let channelList = await response.json()
            setChannels(channelList.data)
        }
        getChannels()
        
    },[baseUrl])

    React.useEffect(() => {
        console.log("userObject in channels",userObject)
        
        //if the user has a session then we need the favorites as well
        if(userObject) {
            // console.log("user has a session")
            getFavorites()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    React.useEffect(() => {
        console.log("rerendering, a channel has been added/removed from favorites")
    },[favorites])

    const getFavorites = async () => {
        if(userObject) {
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