import React, { useEffect, useState } from 'react';
import FavoritesComponent from '../components/Favorites'
import { useOutletContext } from "react-router-dom";
const Favorites = (props) => {
    const [showSidebar, showProfile, sessionUser] = useOutletContext();
    return(
        <FavoritesComponent sessionUser={sessionUser}></FavoritesComponent>
    )
}

export default Favorites;