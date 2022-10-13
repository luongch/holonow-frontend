import {FaCircle, FaClock, FaArchive, FaHeart, FaYoutube, FaInfoCircle} from 'react-icons/fa';
const SidebarData = [    
    {
        title: 'Live',
        path: '/live',
        className: 'sidebarItem',
        icon: <FaCircle className='live' />
    },
    {
        title: 'Upcoming',
        path: '/upcoming',
        className: 'sidebarItem',
        icon: <FaClock/>   
    },
    {
        title: 'Archive',
        path: '/archive',
        className: 'sidebarItem',
        icon: <FaArchive/>
    },
    {
        title: 'Favorites',
        path: '/favorites',
        className: 'sidebarItem',
        icon: <FaHeart/>
    },
    {
        title: 'Channel',
        path: '/channel',
        className: 'sidebarItem',
        icon: <FaYoutube/>
    },
    {
        title: 'About',
        path: '/about',
        className: 'sidebarItem',
        icon: <FaInfoCircle/>
    }
];


export default SidebarData;