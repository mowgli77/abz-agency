import React from 'react'
import logo from '../images/logo.svg'
import burger from '../images/menu-icon.svg'
import {MenuMobile, MenuPC} from '../components'
import {connect} from "react-redux";
import {setShowBurgerMenu} from "../redux/actions";

const Header = ({setShowBurgerMenu, isBurgerOpen}) => {
    return (
        <div className={'header'}>
            <div className={'header__container'}>
                <img src={logo} />
                <div className={'header__burger-button'}>
                    <span onClick={() => setShowBurgerMenu(true)}><img src={burger}/></span>
                </div>
                {isBurgerOpen && <MenuMobile setShowBurgerMenu={setShowBurgerMenu}/>}
                <MenuPC />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isBurgerOpen: state.users.isBurgerOpen
})

export default connect(mapStateToProps, {setShowBurgerMenu})(Header)