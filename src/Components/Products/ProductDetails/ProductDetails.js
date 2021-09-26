import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { shopFakeData } from '../../ShopCatagory/ShopCatagoryData/ShopFakeData';
import MenuBar from './../../MenuBar/MenuBar';

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

    console.log(productDetails)

    return (
        <>
            <MenuBar></MenuBar>
            <div>
                <h1>{productDetails.storId}</h1>
                <img src={productDetails.image} alt="" />
                <h1>{productDetails.productName}</h1>
                <h3>{productDetails.description}</h3>
            </div>
        </>
    );
};

export default ProductDetails;