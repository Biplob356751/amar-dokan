import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Shop.css'
import ShopCatagoryData from '../ShopCatagory/ShopCatagoryData/ShopCatagoryData.json';

const Shop = (props) => {
    const { id } = useParams();
    const [shopItem, setShopItem] = useState([]);
    useEffect(() => {
        for (let i = 0; i < ShopCatagoryData.length; i++) {
            if (ShopCatagoryData[i].id == id) {
                setShopItem(ShopCatagoryData[i].catagory);
            }
        }

    }, [id]);
    return (
        <div className="shop_container container">
            {
                shopItem.map(shop =>
                    <div className="shop_content_img" key={shop.key}>
                        <Link to={`/product/${shop.key}`}>
                            <img src={shop.img} alt="" />
                            <div className="shop_content">
                                <h4>{shop.name}</h4>
                                <p>{shop.schedule}</p>
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default Shop;