import '../styles/navbar.css';
import {FaUserCircle} from 'react-icons/fa';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import Sidebar from './Sidebar';
import ProfileMenu from "./ProfileMenu";
import {useEffect} from 'react'

const Navbar = (props) => {
    let {sessionUser, showProfile, toggleProfile} = props
    let navigate = useNavigate();
    const doSearch = () => {
        let searchTerms = document.getElementById("search").value;
        let path = 'search'
        navigate({
            pathname:path,
            search:`?searchTerms=${searchTerms}`
        })
    }
    const onLogoClick = () => {
        navigate({
            pathname:'/'
        })
    }
    useEffect(() => {
        const listener = (event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            event.preventDefault();
            doSearch()
          }
        });
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, []);

    return (
        <div className="navbar">
            <div className='home'>
                {/* <Link to='#' className='menu-bars' onClick={props.toggleSidebar}>
                    <FaIcons.FaBars />
                </Link> */}
                <div className="logoContainer" onClick={onLogoClick}>
                    <img src="../../images/Hololive_triangles_logo.svg" alt="hololive logo"></img>
                    <div className="logo">Holonow</div>
                </div>
                
            </div>            
            <div class="search">
                <input type="search" id="search" />
                <button onClick={doSearch}>
                    <img src="../../icons/magnify.svg" alt="magnifying glass" />
                </button>              
            </div>
            <div className='menu-profile' >
                <div className='menu-profile-icon' onClick={toggleProfile}>
                    <FaUserCircle />
                </div>
                <ProfileMenu sessionUser={sessionUser} showProfile={showProfile} toggleProfile={toggleProfile}></ProfileMenu>      
            </div>
        </div>
    );
}

export default Navbar