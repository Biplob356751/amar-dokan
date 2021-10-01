import React from 'react';
import './CartPrice.css'

const CartPrice = ({addCart, incriment}) => {
    
    const total = addCart.reduce( (total, prd) => total + prd.price - prd.discount/100*prd.price ,0);

    var totalPrice = total*incriment;

    //shipping charge
    var shipping = 0;
    if(totalPrice > 500){
        shipping = 50;
    }
    else if (totalPrice > 200) {
       shipping = 25; 
    }
    else if(totalPrice >= 100){
        shipping = 15;
    }

    //vat+Tax
    var tax = totalPrice / 10;


    


    return (
        <div className="cart_price_section">
            <h1>Total Price</h1>
            <p>Product Price: {Math.floor(totalPrice)} $</p>
            <p>Shipping Price: {shipping} $</p>
            <p>Vat + Tax($) : {Math.floor(tax)} $</p>
            <hr/>
            <p>Grand Total Amount: {Math.floor(totalPrice + tax + shipping)} $</p> 

        </div>
    );
};

export default CartPrice;