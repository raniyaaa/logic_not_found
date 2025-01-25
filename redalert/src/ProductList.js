import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleRequest = (productId) => {
    // Send request to backend to mark product as requested or notify the owner
    console.log(`Product ${productId} requested.`);
  };

  return (
    <div>
      <h2>Available Products</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <p>{product.name}</p>
            <button onClick={() => handleRequest(product._id)}>Request</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
