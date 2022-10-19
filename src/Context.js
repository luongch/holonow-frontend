import React, { createContext, useEffect, useState } from 'react'
import axiosInstance from './api/axiosConfig';

export const globalContext = createContext({});

export default function Context(props) {

    const [userObject, setUserObject] = useState({id:""});

    useEffect(() => {
        console.log("getting session in context component")
        axiosInstance.get('api/v1/session', { withCredentials: true })
        .then((res) => {            
            if (res.data) {
                console.log("userObject in context component",res.data.user);
                setUserObject(res.data.user);
            }
        })        
    }, [])

    
    return (
          <globalContext.Provider value={{userObject}}>{props.children}</globalContext.Provider>
    )
}
