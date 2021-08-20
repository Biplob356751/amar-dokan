import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="home_page container">
            <div className="banner_content">
                <h5>Hey!</h5>
                <h1>WellCome To Our Market.</h1>
                <p>lorem Ipsum dolor sit amet, consectetur adipiscing elit so sad sad lorem ipsum dolor sit amet sad.</p>
                <Link to='/myShop'>Create Your Shop</Link>
            </div>
            <div className="banner_image">
                <img src='https://i.pinimg.com/564x/c4/17/77/c4177738f9c40584dbd9b07a3220743a.jpg' alt="image" />
            </div>
        </div>
    );
};

export default Banner;