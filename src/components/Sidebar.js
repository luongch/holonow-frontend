import '../styles/sidebar.css'
import { Link } from "react-router-dom";
import SidebarData from "../fixture/SidebarData.js"

const Sidebar = (props) => {
    return (
        <nav className={props.showSidebar ? 'sidebar active' : 'sidebar'}>
            <ul>
                {
                    SidebarData.map((item,index)=> {
                        return (
                        <li key={index} className={item.className}>
                            <Link  to={item.path}>{item.title}</Link>
                        </li>
                        )
                    })
                }
            </ul>
        </nav>
    );

}

export default Sidebar