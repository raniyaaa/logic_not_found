import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmergencyRequest = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const userId = localStorage.getItem('userId'); // Assuming the logged-in user's ID is stored in localStorage

  useEffect(() => {
    // Fetch available products
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (err) {
        setError('Error fetching products');
      }
    };

    fetchProducts();
  }, []);

  const handleRequest = async (productId) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/products/request', {
        productId,
        userId,
      });

      alert(response.data.message || 'Request sent successfully!');
      setLoading(false);
    } catch (err) {
      alert('Failed to send request');
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Emergency Product Requests</h2>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <p>
              <strong>{product.name}</strong> - {product.description}
            </p>
            <p>Available at: {product.location}</p>
            <button onClick={() => handleRequest(product._id)}>Request This Product</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyRequest;
