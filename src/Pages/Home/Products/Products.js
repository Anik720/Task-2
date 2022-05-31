import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });
  console.log(products);
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-5'>
      {products.map((product) => (
        <Product product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
