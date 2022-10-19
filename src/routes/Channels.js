import React, { useState, useContext } from 'react';
import ChannelsList from '../components/ChannelsList';
// import { useOutletContext } from "react-router-dom";
import { globalContext } from '../Context';
import axiosInstance from '../api/axiosConfig';

const Channels = (props) => {
    const [channels, setChannels] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const {userObject} = useContext(globalContext)

    React.useEffect(() => {
        const getChannels = async () => {
            // let response = await fetch(`${baseUrl}/api/v1/channels`);
            // let channelList = await response.json()
            
            axiosInstance.get('api/v1/channels')
            .then((res)=> {

                if (res.data) {
                    console.log("got the channel", res.data)
                    setChannels(res.data.data)
                }
            })
        }
        getChannels()
        
    },[])

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
            // let response = await fetch(`/api/v1/channels/favorites`);
            // let favoritesList = await response.json();
            // setFavorites(favoritesList.data)

            axiosInstance.get('api/v1/channels/favorites')
            .then((res)=> {

                if (res.data) {
                    console.log("got the fave channel", res.data)
                    setFavorites(res.data.data)
                }
            })
        }
    }

    return (
        <div className='videoContainer'>
            <ChannelsList channels={channels} favorites={favorites} getFavorites={getFavorites}></ChannelsList>
        </div>
        
    )
}

export default Channels