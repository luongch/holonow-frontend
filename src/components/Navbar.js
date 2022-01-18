import '../styles/navbar.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    const [showProfile, setShowProfile] = useState(false);
    const toggleSidebar = () =>{ 
        setShowSidebar(!showSidebar);
    }
    const toggleProfile = () =>{ 
        setShowProfile(!showProfile);
    }


    return (
        <div className="navbar">
            <Link to='#' className='menu-bars' onClick={toggleSidebar}>
                <FaIcons.FaBars />
            </Link>
            <Sidebar showSidebar={showSidebar}></Sidebar>
            <div className="menu-bars">
                search
            </div>
            <div className="menu-bars">
            <Link to='#' className='menu-bars'>            
                <FaIcons.FaUserCircle />
            </Link>
            </div>
        </div>
    );
}

export default Navbar