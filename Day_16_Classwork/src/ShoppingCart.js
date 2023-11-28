// ShoppingCart.js

import React from 'react';

const ShoppingCart = ({ cart, total }) => {
  return (
    <div className="border-[10px] border-gray-400 p-[10px] w-[30%] ">
      <h2 className='text-center text-2xl font-semibold p-2'>Shopping Cart</h2>
       <div className='flex flex-col justify-between  h-[80%]'>
      {cart.length === 0 ? (
        <p>No Product added to the cart</p>
      ) : (
        <ul className='flex flex-col items-center'>
          {cart.map((item) => (
            <li key={item.product.id} className='flex items-center justify-around bg-slate-400 text-white font-semibold mb-2 w-[95%] '>
              {item.product.name} <p> ${item.product.price} x {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
      <p className='flex items-center justify-around bg-slate-500 text-white font-semibold mb-2 w-[95%] list-none text-xl '><li>Total :</li> <li>${total}</li></p>
      </div>
    </div>
  );
};

export default ShoppingCart;
