import React, { useState } from 'react';
import FavoritesComponent from '../components/Favorites'
import { useOutletContext, Navigate } from "react-router-dom";

const Favorites = (props) => {
    const {sessionUser} = useOutletContext();
    const [favorites, setFavorites] = useState([]);

    React.useEffect(()=>{
        const getFavorites = async () => {
            let response = await fetch("/api/v1/favorites");
            let favoritesList = await response.json();
    
            setFavorites(favoritesList.data)
        }
    
        //get favorites on load
        getFavorites()
    },[])

    
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