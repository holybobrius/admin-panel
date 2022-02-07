import React from 'react'
import './Navbar.css'
import NavItem from '../NavItem/NavItem'

const Navbar = props => {
    return (
        <div className='navbar'>
            {props.titles ? props.titles.map(item => <NavItem key={item.path} title={item.title} path={item.path} />) : ''}
            <NavItem title='+' path='new' />
        </div>
    )
}

export default Navbar