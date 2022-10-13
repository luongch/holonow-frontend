import { Link  } from 'react-router-dom';
import '../styles/profileMenu.css';
import * as FaIcons from 'react-icons/fa';

const ProfileMenu = (props) => {
    let {showProfile, toggleProfile} = props

    return(
        <div className='dropdown-menu'>
            <div className={showProfile ? 'dropdown-content' : 'dropdown-content hidden'} id="dropdown-content">
                <span className='menuItem'>
                    <FaIcons.FaSignInAlt/>
                    <Link to='/login' onClick={toggleProfile} >Login</Link>
                </span>
                <span className='menuItem'>
                    <FaIcons.FaCog />
                    <Link to='/' onClick={toggleProfile} >Settings</Link>
                </span>
                
            </div>
        </div>
    )
}

export default ProfileMenu