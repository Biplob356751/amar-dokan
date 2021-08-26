import React from 'react';
import "./Home.css"
import Banner from './../Banner/Banner';
import ShopCatagory from './../ShopCatagory/ShopCatagory';
import Market from '../Market/Market';
import Review from '../Review/Review'
import Club from '../Club/Club';
import Counter from '../Counter/Counter';
import SimpleBlog from '../SimpleBlog/SimpleBlog';
import ContactInfo from '../ContactInfo/ContactInfo';
import Sponsor from '../Sponsor/Sponsor';

const Home = () => {
    return (
        <div>
            <div className="home_page container">
               <Banner></Banner>
            </div>
            <div className="shop_catagory container">
               <ShopCatagory></ShopCatagory> 
            </div>
            <div className="market_page container">
                <Market></Market>
            </div>
            <div className="counter_page">
                <Counter></Counter>
            </div>
            <div className="review_slider_container container">
                <Review></Review>
            </div>
            <div className="club_page">
                <Club></Club>
            </div>
            <div className="simple_blog_page container">
                <SimpleBlog></SimpleBlog>
            </div>
            <div className="contact_info">
                <ContactInfo></ContactInfo>
            </div>
            <div className="sponsor_page container">
                <Sponsor></Sponsor>
            </div>
        </div>
    );
};

export default Home;