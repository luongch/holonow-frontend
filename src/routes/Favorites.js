import React, { useState, useContext } from 'react';
import { useOutletContext } from "react-router-dom";
import FavoritesComponent from '../components/Favorites'
import { Navigate } from "react-router-dom";
import { globalContext } from '../Context';
import axiosInstance from '../api/axiosConfig';

const Favorites = (props) => {
    const [favorites, setFavorites] = useState([]);
    const {userObject} = useContext(globalContext)
    const {sessionUser} = useOutletContext();

    console.log("userObject in faves component", userObject)
    console.log("sessionUser in faves component", sessionUser)
    
    React.useEffect(()=>{
        const getFavorites = async () => {
            console.log("getFavorites")
            axiosInstance.get('api/v1/favorites', { withCredentials: true })
            .then((res)=> {

                if (res.data) {
                    console.log("got the faves", res.data.data)
                    setFavorites(res.data.data)
                }
            })
            // let response = await fetch(`/api/v1/favorites`);
            // let favoritesList = await response.json();
            
    
            // if(response.status === 200) {
            //     console.log("found favorites")
            //     setFavorites(favoritesList.data)
            // }
            
        }
    
        getFavorites()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    // React.useEffect(()=>{
    //     console.log("the session in favorites", userObject.favorites)
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[])

    
    return(
        <div className="videoContainer">
            {sessionUser ?
                <FavoritesComponent favorites={favorites} />
                :
                <Navigate to="/login" replace={true} />
            }
        </div>
    )
}

export default Favorites;