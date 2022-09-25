import '../styles/navbar.css';
import * as FaIcons from 'react-icons/fa';
import { Link, useOutletContext } from 'react-router-dom';
import { useContext, useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = (props) => {
    let showSidebar = props.showSidebar;
    return (
        <div className="navbar">
            <div className='home'>
                <Link to='#' className='menu-bars' onClick={props.toggleSidebar}>
                    <FaIcons.FaBars />
                </Link>
                <img src="../../images/Hololive_triangles_logo.svg" alt="hololive logo"></img>
                <div className="logo">Holonow</div>
            </div>            
            {/* <Sidebar showSidebar={showSidebar}></Sidebar> */}
            <div class="search">
                <input type="search" id="search" />
                <button>
                    <img src="../../icons/magnify.svg" alt="magnifying glass" />
                </button>              
            </div>
            <div className='menu-profile'>
                <Link to='#' >            
                    <FaIcons.FaUserCircle />
                </Link>
            </div>
        </div>
    );
}

export default Navbar