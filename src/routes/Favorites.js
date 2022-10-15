import React, { useEffect, useState } from 'react';
import FavoritesComponent from '../components/Favorites'
import { useOutletContext, Navigate } from "react-router-dom";

const Favorites = (props) => {
    const [showProfile, sessionUser] = useOutletContext();
    const [favorites, setFavorites] = useState([]);

    React.useEffect(()=>{
        //get favorites on load
        getFavorites()
    },[])

    const getFavorites = async () => {
        let response = await fetch("/api/v1/favorites");
        let favoritesList = await response.json();

        setFavorites(favoritesList.data)
    }

    return(
        <div className="videoContainer">
            {sessionUser.id && sessionUser.id !== "" ?
                <FavoritesComponent favorites={favorites}></FavoritesComponent>
                :
                <Navigate to="/login" replace={true} />
            }
        </div>
    )
}

export default Favorites;