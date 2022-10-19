import React, { createContext, useEffect, useState } from 'react'
import axiosInstance from './api/axiosConfig';

export const globalContext = createContext({});

export default function Context(props) {

    const [userObject, setUserObject] = useState({id:""});

    useEffect(() => {
        axiosInstance.get('api/v1/session')
        .then((res) => {            
            if (res.data) {
                setUserObject(res.data.user);
            }
        })        
    }, [])

    
    return (
          <globalContext.Provider value={{userObject}}>{props.children}</globalContext.Provider>
    )
}
