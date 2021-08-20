import React from 'react';
import "./Home.css"
import Banner from './../Banner/Banner';
import ShopCatagory from './../ShopCatagory/ShopCatagory';

const Home = () => {
    return (
        <div>
            <div className="home_page container">
               <Banner></Banner>
            </div>
            <div className="shop_catagory container">
               <ShopCatagory></ShopCatagory> 
            </div>
        </div>
    );
};

export default Home;