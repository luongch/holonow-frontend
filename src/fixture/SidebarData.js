import {FaCircle, FaClock, FaArchive, FaHeart, FaYoutube} from 'react-icons/fa';
// import {FaInfoCircle} from 'react-icons/fa';
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
        title: 'Channels',
        path: '/channels',
        className: 'sidebarItem',
        icon: <FaYoutube/>
    },
    // {
    //     title: 'About',
    //     path: '/about',
    //     className: 'sidebarItem',
    //     icon: <FaInfoCircle/>
    // }
];


export default SidebarData;