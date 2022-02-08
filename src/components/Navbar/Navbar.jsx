import React from 'react'
import './Navbar.css'
import NavItem from '../NavItem/NavItem'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const pages = useSelector(state => state)
    
    return (
        <div className='navbar'>
            {pages ? pages.map(item => <NavItem key={item.path} title={item.title} path={item.path} />) : ''}
            <NavItem title='+' path='new' />
        </div>
    )
}

export default Navbar