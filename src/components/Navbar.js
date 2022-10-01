import '../styles/navbar.css';
import * as FaIcons from 'react-icons/fa';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navbar = (props) => {
    let navigate = useNavigate();
    const doSearch = () => {
        let searchTerms = document.getElementById("search").value;
        let path = 'search'
        navigate({
            pathname:path,
            search:`?searchTerms=${searchTerms}`
        })
    }
    return (
        <div className="navbar">
            <div className='home'>
                {/* <Link to='#' className='menu-bars' onClick={props.toggleSidebar}>
                    <FaIcons.FaBars />
                </Link> */}
                <img src="../../images/Hololive_triangles_logo.svg" alt="hololive logo"></img>
                <div className="logo">Holonow</div>
            </div>            
            <div class="search">
                <input type="search" id="search" />
                <button onClick={doSearch}>
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