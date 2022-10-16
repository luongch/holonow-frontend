import React, { useState } from 'react';
import FavoritesComponent from '../components/Favorites'
import { useOutletContext, Navigate } from "react-router-dom";

const Favorites = (props) => {
    const {baseUrl, sessionUser} = useOutletContext();
    const [favorites, setFavorites] = useState([]);

    React.useEffect(()=>{
        const getFavorites = async () => {
            console.log("getFavorites", baseUrl)
            let response = await fetch(`${baseUrl}/api/v1/favorites`);
            let favoritesList = await response.json();
            
    
            if(response.status === 200) {
                setFavorites(favoritesList.data)
            }
            
        }
    
        getFavorites()
    },[sessionUser.id, baseUrl])

    
    return(
        <div className="videoContainer">
            {sessionUser.id && sessionUser.id !== "" ?
                <FavoritesComponent favorites={favorites} />
                :
                <Navigate to="/login" replace={true} />
            }
        </div>
    )
}

export default Favorites;