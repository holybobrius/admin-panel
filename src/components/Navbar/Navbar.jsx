import react from 'react'
import './Navbar.css'
import NavItem from '../NavItem/NavItem'

const Navbar = props => {
    return (
        <div className='navbar'>
            {props.titles ? props.titles.map(item => <NavItem title={item.title} path={item.path} />) : ''}
            <NavItem title='+'/>
        </div>
    )
}

export default Navbar