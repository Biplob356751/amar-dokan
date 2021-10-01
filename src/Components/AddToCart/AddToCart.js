import React, { useContext, useState } from 'react';
import { CartContext } from '../../App';
import MenuBar from '../MenuBar/MenuBar';
import './AddToCart.css'
import CartPrice from './CartPrice/CartPrice';

const AddToCart = () => {
    const [addCart, setAddCart] = useContext(CartContext);

    //reomove cart product
    const removeProduct = (storId) =>{
        const newCard = addCart.filter(pd => pd.storId !== storId);
        setAddCart(newCard);
    }

    //incressCart button
    const [incriment, setIncriment] = useState(1);

    const handleDecriment = (storId) =>{
        if(incriment > 1){
            setIncriment(incriment - 1);
        }else{
            setIncriment(1)
        }
        
    }


    return (
        <>
        <MenuBar></MenuBar>
            <div className="add_to_cart_page container_fluid">
                <div className="addToCart">
                    {
                        addCart.map(addCart =>
                            <div className="single_cart" key={addCart.storId}>
                                <div className="single_cart_image">
                                    <img src={addCart.image} alt="" />
                                    <h4>{addCart.productName}</h4>
                                    <div className="quantity_value">
                                        <button onClick={()=> setIncriment(incriment + addCart.quantity)}><i className="fa fa-plus"></i></button><button>{incriment}</button><button onClick={()=>handleDecriment(addCart.storId)}><i className="fa fa-minus"></i></button>
                                    </div>
                                    <h3>{Math.floor(addCart.price - addCart.discount / 100 * addCart.price)}$</h3>
                                    <i onClick={()=> removeProduct(addCart.storId)} className="fa fa-trash" id="trash"></i>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="cart_total_price">
                    <CartPrice incriment={incriment} addCart={addCart}></CartPrice>
                </div>
            </div>
        </>
    );
};

export default AddToCart;