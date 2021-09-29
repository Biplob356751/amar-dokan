import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CartContext } from '../../../App';
import { shopFakeData } from '../../ShopCatagory/ShopCatagoryData/ShopFakeData';
import MenuBar from './../../MenuBar/MenuBar';
import './ProductDetails.css'

const ProductDetails = () => {
    const { id, key, storId } = useParams();

    const [productDetails, setProductDetails] = useState("");

    useEffect(() => {

        for (let i = 0; i < shopFakeData.length; i++) {

            if (shopFakeData[i].id === parseInt(id)) {
                for (let j = 0; j < shopFakeData[i].catagory.length; j++) {
                    if (shopFakeData[i].catagory[j].key === key) {
                        for (let k = 0; k < shopFakeData[i].catagory[j].product.length; k++) {
                            if (shopFakeData[i].catagory[j].product[k].storId === storId) {
                                setProductDetails(shopFakeData[i].catagory[j].product[k])
                            }
                        }
                    }
                }

            }
        }

    }, [key, id, storId]);

    console.log(productDetails);

    const [addCart, setAddCart] = useContext(CartContext);
    const handleAddToCart = (productDetails) => {
        const newCart = [...addCart, productDetails];
        setAddCart(newCart)
    }

    return (
        <>
            <MenuBar></MenuBar>
            <div className="container">
                <div className="product_details">
                    <div className="product_details_img">
                        <img src={productDetails.image} alt="" />
                    </div>
                    <div className="product_details_content">
                        <h1>Product Name: {productDetails.productName}</h1>
                        <h3><span>Product Price:</span> {productDetails.price - productDetails.discount / 100 * productDetails.price}$</h3>
                        <div className="product_details_review_icon">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <span>({productDetails.rating})</span>
                        </div>
                        <p>{productDetails.description}</p>
                        <button onClick={() => handleAddToCart(productDetails)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;