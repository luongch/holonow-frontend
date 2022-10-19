import React, { useState} from 'react';
import { useOutletContext } from "react-router-dom";
import FavoritesComponent from '../components/Favorites'
import { Navigate } from "react-router-dom";
import axiosInstance from '../api/axiosConfig';

const Favorites = (props) => {
    const [favorites, setFavorites] = useState([]);
    const {sessionUser} = useOutletContext();
    
    React.useEffect(()=>{
        const getFavorites = async () => {
            axiosInstance.get('api/v1/favorites')
            .then((res)=> {

                if (res.data) {
                    setFavorites(res.data.data)
                }
            })          
        }
    
        getFavorites()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
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