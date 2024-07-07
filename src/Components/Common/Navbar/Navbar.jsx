import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';
import logo from '../../../resources/mainLogo.jpeg';
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <>
            <div className={css.navContainer}>
                <div className={css.Navbar1}>
                    <NavLink className={css.navlogo} to='/'>
                        <img className={css.logo} src={logo} alt='Eventeaze Logo' />
                    </NavLink>
                    <div className={css.menuToggle} onClick={toggleMenu}>
                        {menuActive ? <FaTimes /> : <FaBars />}
                    </div>
                </div>

                <div className={`${css.navItems} ${menuActive ? css.active : ''}`}>
                    <div className={css.location}>
                        <CiLocationOn />
                        <h5>Telangana</h5>
                    </div>

                    <form>
                        <input type='text' placeholder='Put Your Wish' />
                        <CiSearch />
                    </form>

                    <div className={css.languages}>
                        <NavLink to={"/about-us"}>About Us</NavLink>
                    </div>

                    <div className={css.signIn}>
                        <NavLink to="/signIn">SignIn/LogIn</NavLink>
                    </div>

                    <div className={css.cart}>
                        <NavLink to="/cart">Cart</NavLink>
                        <FaShoppingCart />
                    </div>

                    <div className={css.app}>
                        <NavLink to="/cart">Download the App</NavLink>
                    </div>
                </div>
            </div>

            <div className={`${css.navBottom} ${menuActive ? css.active : ''}`}>
                <ul>
                    <li><NavLink to='/'>ALL</NavLink></li>
                    <li><NavLink to='/offers'>OFFERS</NavLink></li>
                    <li><NavLink to='/reviews'>REVIEWS</NavLink></li>
                    <li><NavLink to='/faqs'>FAQS</NavLink></li>
                    <li><NavLink to='/blogs'>BLOGS</NavLink></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;