import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShopCatagory.css';
import ShopCatagoryData from './ShopCatagoryData/ShopCatagoryData.json';

const ShopCatagory = () => {
    const [shopCatagory, setShopCatagory] = useState([]);
    useEffect(() =>{
        setShopCatagory(ShopCatagoryData);
    },[])
    return (
        <div className="shop_catagory_container">
            <h3>Shop Catagory</h3>
            <div className="shopCatagory_page">
                
                {
                    shopCatagory.map(catagoryShop =>
                    <div className="shopCatagory_content" key={catagoryShop.id}>
                        <Link to={`/shop/${catagoryShop.id}`}>
                            <img src={catagoryShop.image} alt="image" />
                            <h4>{catagoryShop.title}</h4>
                            <h5>Open: {catagoryShop.schedule}</h5>
                        </Link>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ShopCatagory;
