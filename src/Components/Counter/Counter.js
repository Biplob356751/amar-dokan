import React from 'react';
import './Counter.css'

const Counter = () => {
    return (
        <div className="counter_container">
           <div className="counter_user">
                <span>2200+</span>
                <p>User</p>
           </div>
           <div className="counter_user">
                <span>1000+</span>
                <p>Shop</p>
           </div>
           <div className="counter_user">
                <span>3000+</span>
                <p>Visitors</p>
           </div>
           <div className="counter_user">
                <span>4000+</span>
                <p>Buyer</p>
           </div>
        </div>
    );
};

export default Counter;