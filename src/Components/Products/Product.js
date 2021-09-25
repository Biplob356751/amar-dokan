import React, { useEffect, useState } from 'react';
import './Product.css';
import { Link, useParams } from 'react-router-dom';
import { shopFakeData } from './../ShopCatagory/ShopCatagoryData/ShopFakeData';

const Product = () => {
    const { key, id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {

        for (let i = 0; i < shopFakeData.length; i++) {

            if(shopFakeData[i].id === parseInt(id)){
                for(let j = 0; j < shopFakeData[i].catagory.length; j++) {
                    if(shopFakeData[i].catagory[j].key === key){
                        setProduct(shopFakeData[i].catagory[j].product)
                    }
                }

            }
        }
    }, [key, id]);
    return (
        <div className="product_page container">
            {
                product.map(productItem =>
                    <div className="product_content" key={productItem.storId}>

                        <h1>{productItem.description}</h1>
                        <img src={productItem.image} alt="" />
                        <h1>{productItem.productName}</h1>
                        <p>{productItem.discount}</p>
                        <Link to={`/details/${id}/${key}/${productItem.storId}`}>Details</Link>
                    </div>
                )
            }
        </div>
    );
};

export default Product;