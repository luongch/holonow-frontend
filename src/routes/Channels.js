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
            axiosInstance.get('api/v1/channels')
            .then((res)=> {
                if (res.data) {
                    setChannels(res.data.data)
                }
            })
        }
        getChannels()        
    },[])

    React.useEffect(() => {
        //if the user has a session then we need the favorites as well
        if(userObject) {
            getFavorites()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getFavorites = async () => {
        if(userObject) {
            axiosInstance.get('api/v1/channels/favorites')
            .then((res)=> {
                if (res.data) {
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