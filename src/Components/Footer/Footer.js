import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer_page">
                <div className="footer_logo">
                    <Link to="/"><span><i className="fas fa-shopping-cart"></i>Amar Dokan</span></Link>
                    <div className="footer_logo_content">
                        <p>Dhaka, Tajgaon 1208, Bangladesh.</p>
                        <p>+099978468323, biplobhossain356751@gmail.com</p>
                    </div>
                </div>
                <div className="footer_product">
                    <h2>Product</h2>
                    <Link>Electronices Shop</Link>
                    <Link>Food Resturant</Link>
                    <Link>Book Library</Link>
                    <Link>Cosmetics</Link>
                </div>
                <div className="footer_resourse">
                    <h2>Resourse</h2>
                    <Link>Ema-Jhon Simple</Link>
                    <Link>Ultra Nation</Link>
                    <Link>Favourate Team</Link>
                    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Flucid-minsky-369289.netlify.app%2F%3Ffbclid%3DIwAR1M1-bMI1TEQmjILmz1NcNSmDfSH5l3FbY24kk3KhzX9A043srCm3GxfnM&h=AT0HWt4S7BB0YjL8q3fXhwSZsWJjw5eZueJ4aBSSOKA4NUGQx3oMvSQfWgK88WznJyWB3DUCg9XalbHfClcbSklbr7SOh96AnLNmeWx0-tPJKGTKQEvHSrw3toIEq7im48_ryw" target="_blank">JossGift.com</a>
                </div>
                <div className="footer_resourse_company">
                    <h2>Company</h2>
                    <Link>Amazone</Link>
                    <Link>Daraz Bangladesh</Link>
                    <Link>Chal Dal.com</Link>
                    <Link>Evely Ltd</Link>
                </div>
            </div>
            <div className="copy_right_section">
                <p>All rights reserved Amar Dokan.com {new Date().toLocaleDateString()}</p> 
            </div>
        </>
    );
};

export default Footer;