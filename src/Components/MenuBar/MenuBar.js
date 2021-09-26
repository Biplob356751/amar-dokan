import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';


const MenuBar = () => {

    return (
        <div className="menu_bar">
            <div className="container_fluid">
                <div className="menu_item_content">
                    <div className="menu_logo">
                        <Link><i class="fab fa-opencart"></i>CITY<span>S</span>HOP</Link>
                    </div>
                    <div className="menu_search_bar">
                        <input type="text" placeholder="Search More Product..." />
                        <i className="fa fa-search"></i>
                    </div>
                    <div className="cart_product_item">
                        <Link to="/addToCart">
                            <div className="cart_product_item_icon1">
                                <i class="fas fa-shopping-bag"></i>
                                <span className="cart_icon">4</span>
                            </div>
                        </Link>
                        <Link to="/addFavourate">
                            <div className="cart_product_item_icon2">
                                <i class="far fa-heart"></i>
                                <span className="cart_icon2">4</span>
                            </div>
                        </Link>
                    </div>
                    <div className="sign_in_btn">
                        <Link to="/signIn">SignIn</Link>
                        <Link to="/LogIn">LogIn</Link>
                    </div>
                    <div className="user_img">
                        <img src="https://icons-for-free.com/iconfiles/png/512/boy+man+person+user+woman+icon-1320085967769585303.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;