import React, { useState, useEffect } from 'react';
import { Product } from '../../atoms';
import './index.scss';


function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products/get');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-item" onClick={() => { /* Link to ProductPage with product details */ }}>
          <Product key={product._id} product={product} />
        </div>
      ))}
    </div>
);
}

export default ProductList;