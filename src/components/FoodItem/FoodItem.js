import React, { useContext } from 'react';
import { assets } from '../../assets/assets'; 
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';

export default function FoodItem({ id, name, price, description, image }) {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt="" />
                {!cartItems[id]
                    ? <img className='add' id='white' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                    : <div className='food-item-counter'>
                        <img className='add' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img className='item-rating' src={assets.rating_starts} alt="Rating" /> {/* Replace with actual rating image */}
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">Rs.{price}</p>
            </div>
        </div>
    );
}
