import './NavItem.css'
import { Link } from 'react-router-dom'

const NavItem = ({ title, path }) => {
    return(
        <div className="navItem">
            <Link to={`/${path}`}>{title}</Link>
        </div>
    )
}

export default NavItem