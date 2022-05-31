import React from 'react';

const Product = ({ product }) => {
  return (
    <div>
      <div class='card w-96 bg-base-100 shadow-xl'>
        <figure>
          <img src={product.img} alt='Shoes' />
        </figure>
        <div class='card-body'>
          <h2 class='card-title'>Name: {product.name}</h2>
          <p>Price: {product.price}</p>
          <div class='card-actions justify-end'>
            <button class='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
