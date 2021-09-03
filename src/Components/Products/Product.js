import React, { useEffect, useState } from 'react';
import './Product.css';
import ShopCatagoryData from '../ShopCatagory/ShopCatagoryData/ShopCatagoryData.json'
import { useParams } from 'react-router-dom';

const Product = () => {
    const { key } = useParams();

    
    // console.log(key);
    const [products, setProducts] = useState({});
    const [result, setResult] = useState([]);


    
    

    useEffect(() => {

        // for (let i = 0; i < ShopCatagoryData.length; i++) {
        //     if(ShopCatagoryData[i].catagory[i].key == key){
        //         setProducts(ShopCatagoryData[i].catagory[i].product);
        //     }
        //     // console.log(ShopCatagoryData[i].catagory[i].product);
        //     console.log(products.id)
        // }

        setResult(ShopCatagoryData);
    }, []);


   const pd = result.map(res => {
        const data = res.catagory.find(cat => cat.key == key);
        // console.log(data);
       setProducts(data);
        return data;
        

    })
     console.log(products)
    
    // 
// console.log(product[0])



    return (
        <div className="product_page container">
            
            {/* {
             pd?.product.map(productItem =>
                    <div className="product_content" key={productItem ?.id}>
                        
                        <h1>{productItem ?.description}</h1>
                        <img src={productItem ?.image} alt="" />
                        <h1>{productItem ?.productName}</h1>
                        <p>{productItem ?.discount}</p>
                    </div>
                )
            } */}

            
        </div>
    );
};

export default Product;