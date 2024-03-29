import React, { useState} from 'react';
import { useOutletContext } from "react-router-dom";
import FavoritesComponent from '../components/Favorites'
import { Navigate } from "react-router-dom";
import axiosInstance from '../api/axiosConfig';
import Pagination from '../components/Pagination';
import Message from '../components/Message';

const Favorites = (props) => {
    const [favorites, setFavorites] = useState([]);
    const {sessionUser} = useOutletContext();
    const [page, setPage] = useState(0);
    const [videoCount, setVideoCount] = useState();
    
    React.useEffect(()=>{
        const getFavorites = async () => {
            let params =  { 
                page
              };
            axiosInstance.get('api/v1/favorites',{params})
            .then((res)=> {
                if (res.data) {
                    setFavorites(res.data.data)
                    setVideoCount(res.data.count)
                }
            })          
        }
    
        getFavorites(page)
    },[page])
    
    return(
        <div className='main'>
            <div className="videoContainer">
                {sessionUser ?
                    (favorites.length > 0 ?
                        <FavoritesComponent favorites={favorites} />
                        :
                        <Message type="nofavorites"></Message>
                    )
                    :
                    <Navigate to="/login" replace={true} />
                }
            </div>
            <Pagination videoCount={videoCount} page={page} setPage={setPage} ></Pagination>
        </div>
        
    )
}

export default Favorites;