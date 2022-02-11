import './NavItem.css'
import { Link } from 'react-router-dom'

const NavItem = ({ title, path }) => {

    return(
        <div className="navItem">
            <Link onClick={event => {
                const prevActive = document.querySelector('.active');
                if(prevActive) prevActive.classList.remove('active');
                event.target.parentNode.classList.add('active')
            }} to={`/${path}`}>{title}</Link>
        </div>
    )
}

export default NavItem