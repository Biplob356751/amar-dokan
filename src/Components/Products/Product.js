import React, { useContext, useEffect, useState } from 'react';
import './Product.css';
import { Link, useParams } from 'react-router-dom';
import { shopFakeData } from './../ShopCatagory/ShopCatagoryData/ShopFakeData';
import MenuBar from './../MenuBar/MenuBar';
import ShopSlider from '../ShopSlider/ShopSlider';
import { CartContext } from '../../App';

const Product = () => {
    const { key, id } = useParams();
    const [product, setProduct] = useState([]);

    const [addCart, setAddCart] = useContext(CartContext)
    const handleAddToCart = (productItem) => {
        const newCart = [...addCart, productItem];
        setAddCart(newCart);
    }

    useEffect(() => {

        for (let i = 0; i < shopFakeData.length; i++) {

            if (shopFakeData[i].id === parseInt(id)) {
                for (let j = 0; j < shopFakeData[i].catagory.length; j++) {
                    if (shopFakeData[i].catagory[j].key === key) {
                        setProduct(shopFakeData[i].catagory[j].product)
                    }
                }

            }
        }
    }, [key, id]);

    return (
        <>
            <MenuBar></MenuBar>
            <ShopSlider></ShopSlider>

            <div className="store_page container">
                <h1>Choise Your Product</h1>
                <div className="product_page">

                    {
                        product.map(productItem =>
                            <div className="product_content" key={productItem.storId}>

                                <img src={productItem.image} alt="" />
                                <h4>{productItem.productName}</h4>
                                <del>{productItem.price}$</del>
                                <span>{productItem.price - productItem.discount / 100 * productItem.price} $</span>
                                <p>{productItem.discount} %</p>
                                <div className="product_review_icon">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <span>({productItem.rating})</span>
                                </div>
                                <div className="add_to_cart_btn">
                                    <Link to={`/details/${id}/${key}/${productItem.storId}`}>Details</Link>
                                    <button onClick={() => handleAddToCart(productItem)}>Add To Cart</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </>
    );
};

export default Product;