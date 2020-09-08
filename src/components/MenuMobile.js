import React from 'react'
import logo from '../images/logo.svg'
import {NavLink} from 'react-router-dom'


const MenuMobile = ({setShowBurgerMenu}) => {

    return (
        <div className={'menu__overlay'}>
            <div className={'menu__body'}>
                <div className={'menu__header'}>
                    <img src={logo}/>
                    <span onClick={() => setShowBurgerMenu(false)}>&times;</span>
                </div>
                <nav>
                    <div className={'menu__list'}>
                        <div className={'list-block'}>
                            <div className={'list-block__item'}>
                                <NavLink onClick={() => setShowBurgerMenu(false)} exact to={'/about-me'} activeClassName={'list-block__item-active'}>
                                    About me</NavLink>
                            </div>
                            <div className={'list-block__item'}>
                                <NavLink onClick={() => setShowBurgerMenu(false)} exact to={'/relationships'}
                                         activeClassName={'list-block__item-active'}>Relationships</NavLink>
                            </div>
                            <div className={'list-block__item'}>
                                <NavLink onClick={() => setShowBurgerMenu(false)} exact to={'/users#users'}
                                         activeClassName={'list-block__item-active'}>Users</NavLink>
                            </div>
                            <div className={'list-block__item'}>
                                <NavLink onClick={() => setShowBurgerMenu(false)} exact to={'/sign#up'} activeClassName={'header__menu-active'}>Sign Up</NavLink>
                            </div>
                            <div className={'list-block__item'}>
                                <NavLink onClick={() => setShowBurgerMenu(false)} exact to={'/terms'} activeClassName={'list-block__item-active'}>Terms
                                    and Conditions</NavLink>
                            </div>

                        </div>
                        <div className={'list-block'}>
                            <div className={'list-block__item'}>
                                <NavLink onClick={() => setShowBurgerMenu(false)} exact to={'/how-it-work'} activeClassName={'list-block__item-active'}>
                                    How it work</NavLink>
                            </div>
                            <div className={'list-block__item'}>
                                <NavLink onClick={() => setShowBurgerMenu(false)} exact to={'/partneship'}
                                         activeClassName={'list-block__item-active'}>Partneship</NavLink>
                            </div>
                            <div className={'list-block__item'}>
                                <NavLink onClick={() => setShowBurgerMenu(false)} exact to={'/help'}
                                         activeClassName={'list-block__item-active'}>Help</NavLink>
                            </div>
                            <div className={'list-block__item'}>
                                <NavLink onClick={() => setShowBurgerMenu(false)} exact to={'/testimonial'}
                                         activeClassName={'header__menu-active'}>Leave testimonial</NavLink>
                            </div>
                            <div className={'list-block__item'}>
                                <NavLink onClick={() => setShowBurgerMenu(false)} exact to={'/contact-us'}
                                         activeClassName={'list-block__item-active'}>Contacct us</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default MenuMobile