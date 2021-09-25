import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Shop.css'
import { shopFakeData } from '../ShopCatagory/ShopCatagoryData/ShopFakeData';
import Nav from './../NavBar/Nav';
import Footer from '../Footer/Footer';

const Shop = () => {
    const { id } = useParams();
    const [shopItem, setShopItem] = useState([]);
    useEffect(() => {

        for (let i = 0; i < shopFakeData.length; i++) {
            if (shopFakeData[i].id == id) {
                setShopItem(shopFakeData[i].catagory);
            }
        }
    }, [id]);


    return (
        <div>
            <div>
                <Nav></Nav>
            </div>
            <div className="shop_container container">
                {
                    shopItem.map(shop =>
                        <div className="shop_content_img" key={shop.key}>
                            <Link to={`/product/${id}/${shop.key}`}>
                                <img src={shop.img} alt="" />
                                <div className="shop_content">
                                    <h1>{shop.key}</h1>
                                    <h4>{shop.name}</h4>
                                    <p>{shop.schedule}</p>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Shop;