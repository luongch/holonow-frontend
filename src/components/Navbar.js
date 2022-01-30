import '../styles/navbar.css';
import * as FaIcons from 'react-icons/fa';
import { Link, useOutletContext } from 'react-router-dom';
import { useContext, useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = (props) => {
    let showSidebar = props.showSidebar;
    return (
        <div className="navbar">
            <Link to='#' className='menu-bars' onClick={props.toggleSidebar}>
                <FaIcons.FaBars />
            </Link>
            <Sidebar showSidebar={showSidebar}></Sidebar>
            <div className="menu-item">
                search
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