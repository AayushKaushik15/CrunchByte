// Cart.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Shimmer from './Shimmer';
import { removeItem } from '../constants/cartSlice';
// import './Cart.css'; // Import your CSS file

const Cart = () => {
  const dispatch = useDispatch(); 
  const cartSubscribing = useSelector(value => value.cart.items);
  
  function cartClear(index) {
    dispatch(removeItem({ index }))
  }

  function removeAll () {
    dispatch(cartClear())
  }

  if (cartSubscribing.length === 0) return <h1 className='message-empty'><i className="fa-solid fa-cart-shopping"> Add items to the cart</i></h1>

  const totalAmount = cartSubscribing.reduce((sum, item) => sum + (item.card.info.price / 100 || item.card.info.defaultPrice / 100), 0);

  return (
    <div className="cart-container">
      <div className="left-section">
        <h1 className='cart-title'>Cart</h1>
        {cartSubscribing.map((value, index) => (
          <div className='nested-cart' key={index}>
            <div>
              <h4>{value.card.info.name}</h4>
              <p><i className="fa-solid fa-indian-rupee-sign"></i> {value.card.info.price / 100 || value.card.info.defaultPrice / 100}/-</p>
              <p className='cart-description'>{value.card.info.description}</p>
            </div>
            <button className='clearCart' onClick={() => cartClear(index)}><i className="fa-solid fa-trash"></i></button>
          </div>
        ))}
      </div>
      <div className="right-section">
        <h1>Total Amount</h1>
        <p>Total amount :- <i className="fa-solid fa-indian-rupee-sign"></i> {totalAmount.toFixed(2)}/-</p>
        <p className='emptyCart' onClick={removeAll}>Empty cart</p>
      </div>
    </div>
  );
};

export default Cart;
