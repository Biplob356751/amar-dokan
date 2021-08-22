import React from 'react';
import { Link } from 'react-router-dom';
import './Market.css'

const Market = () => {
    return (
        <div className="market_container">
            <div className="market_image">
                <img src="https://i.pinimg.com/564x/a8/72/0c/a8720c2e3bf03eb05187ee7488efe88f.jpg" alt="" />
            </div>
            <div className="market_content">
                <h3>Our Market Policy</h3>
                <p>lorem Ipsum Policy Market amet has been designed to be used in the public domain.lorem ipsum dolor sit amet con et just abs.
                lorem Ipsum Policy Market amet has been designed to be used in the public domain.lorem ipsum dolor sit amet con et.
                lorem Ipsum Policy Market amet has been designed to be used in the public domain.lorem ipsum dolor sit amet con et just abs?
                </p>
                <Link to="/signIn">Get Start Your Bussiness</Link>
            </div>
        </div>
    );
};

export default Market;