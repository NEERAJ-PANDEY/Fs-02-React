// ProductList.js

import React, { useState } from 'react';

const ProductList = ({ products, addToCart, removeFromCart }) => {
  return (
    <div className="box border-[10px] w-[55%] flex-col pb-8">
      <h2 className='text-center text-2xl font-semibold p-2'>Product List</h2>
      <ul  className='flex flex-col items-center'>
        {products.map((product) => (
          <li key={product.id} className='flex items-center justify-around bg-slate-400 text-white font-semibold mb-2 w-[95%] '>
            {product.name} 
             <p> ${product.price}</p>
           
           <div className='h-14 flex justify-center items-center w-28 '>
           <div className='w-full h-8  border-2 flex justify-around items-center bg-blue-400 border-black rounded-full '>
             <button className='my-3' onClick={() => addToCart(product)}>+</button>
            <span>0</span>
            <button className='my-3' onClick={() => removeFromCart(product)}>-</button>
            </div> 
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
