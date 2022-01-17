import styles from '../styles/sidebar.module.css'
import { Link, Outlet } from "react-router-dom";
import SidebarData from "../fixture/SidebarData.js"

const Sidebar = () => {
    return (
        // <div>
            <nav className={styles.sidebar}>
                <ul>
                    {
                        SidebarData.map((item,index)=> {
                            return (
                            <li key={index}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                            )
                        })
                    }
                </ul>
            </nav>
        // </div>
    );

}

export default Sidebar