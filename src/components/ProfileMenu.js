import { Link  } from 'react-router-dom';
import '../styles/profileMenu.css';
import {FaSignInAlt, FaCog}from 'react-icons/fa';
import React, { useContext } from 'react'
import { globalContext } from '../Context';

const ProfileMenu = (props) => {
    let {showProfile, toggleProfile} = props
    const {userObject} = useContext(globalContext);
    return(
        <div className='dropdown-menu'>
            <div className={showProfile ? 'dropdown-content' : 'dropdown-content hidden'} id="dropdown-content">
                {userObject ?
                    <span className='menuItem'>
                        <FaSignInAlt/>
                        <Link to='/logout' onClick={toggleProfile} >Logout</Link>
                    </span>
                    :
                    <span className='menuItem'>
                        <FaSignInAlt/>
                        <Link to='/login' onClick={toggleProfile} >Login</Link>
                    </span>
                }
                <span className='menuItem'>
                    <FaCog />
                    <Link to='/' onClick={toggleProfile} >Settings</Link>
                </span>
                
            </div>
        </div>
    )
}

export default ProfileMenu