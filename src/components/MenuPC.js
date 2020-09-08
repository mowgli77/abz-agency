import React from 'react'
import {NavLink} from 'react-router-dom'

const MenuPC = () => {
    return (
                <nav className={'header__menu'}>
                        <NavLink exact to={'/about-me'} activeClassName={'header__menu-active'}>About me</NavLink>
                        <NavLink exact to={'/relationships'} activeClassName={'header__menu-active'}>Relationships</NavLink>
                        <NavLink exact to={'/requirements'} activeClassName={'header__menu-active'}>Requirements</NavLink>
                        <NavLink exact to={'/users#users'} activeClassName={'header__menu-active'}>Users</NavLink>
                        <NavLink exact to={'/sign#up'} activeClassName={'header__menu-active'}>Sign Up</NavLink>
                </nav>
    );
}

export default MenuPC