import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const myContext = createContext({});
export default function Context(props) {

    const [userObject, setUserObject] = useState();
    const [baseUrl, setBaseUrl] = useState("");

    useEffect(() => {
        console.log("getting session in context component", `${baseUrl}/api/v1/session`)
        axios.get(`${baseUrl}/api/v1/session`, { withCredentials: true })
        .then((res) => {            
            if (res.data) {
                console.log("userObject in context component",res.data.user);
                setUserObject(res.data.user);
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=>{
        if(process.env.NODE_ENV === 'development') {
          // setBaseUrl('http://localhost:3001')
        }
        else {
          setBaseUrl('https://holonowapi.onrender.com')
        }
      },[])
    return (
        <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
    )
}
