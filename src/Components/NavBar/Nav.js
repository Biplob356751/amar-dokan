import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
    return (
        <>
            <div className="nav_bar ">
                <div className="nav container">
                    <div className="logo">
                        <Link to="/"><span><i className="fas fa-shopping-bag"></i>Amar Dokan</span></Link>
                    </div>
                    <div className="main_menu">
                        <ul>
                            <li><Link to="/">Market</Link></li>
                            <li><Link to="/myShop">My Shop</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="resister_account">
                        <Link to="/signIn">SignIn</Link>
                        <Link to="/login">LogIn</Link>
                    </div>
                    <div className="app_bar">
                        <i className="fa fa-bars"></i> 
                    </div>
                </div>
            </div>
            
        </>

    );
};

export default Nav;