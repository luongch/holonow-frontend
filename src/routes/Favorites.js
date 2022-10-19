import React, { useState, useContext } from 'react';
import FavoritesComponent from '../components/Favorites'
import { useOutletContext, Navigate } from "react-router-dom";
import { myContext } from '../Context';

const Favorites = (props) => {
    const {baseUrl} = useOutletContext();
    const [favorites, setFavorites] = useState([]);
    const userObject = useContext(myContext)

    React.useEffect(()=>{
        console.log("the session in favorites", userObject)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    
    return(
        <div className="videoContainer">
            {userObject ?
                <FavoritesComponent favorites={favorites} />
                :
                <Navigate to="/login" replace={true} />
            }
        </div>
    )
}

export default Favorites;