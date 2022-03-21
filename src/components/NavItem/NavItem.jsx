import './NavItem.css'
import { Link, useLocation } from 'react-router-dom'
import cx from 'classnames'

const NavItem = ({ title, path }) => {

    const { pathname } = useLocation()

    return(
        <Link className={cx('link-wrapper', {
            'active': pathname.substring(1) === path
        })} to={`/${path}`}>
            <div className="navItem">
                {title}
            </div>
        </Link>
    )
}

export default NavItem