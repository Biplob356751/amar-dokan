import React, { useContext } from 'react';
import { CartContext } from '../../App';
import MenuBar from '../MenuBar/MenuBar';
import './AddToCart.css'

const AddToCart = () => {
    const [addCart, setAddCart] = useContext(CartContext);

    console.log(addCart);
    return (
        <>
        <MenuBar></MenuBar>
            <div className="add_to_cart_page">
                {
                    addCart.map(addCart =>
                        <div className="slingle_cart" key={addCart.storId}>
                            <img src={addCart.image} alt="" />
                            <h3>{addCart.price - addCart.discount / 100 * addCart.price}</h3>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default AddToCart;