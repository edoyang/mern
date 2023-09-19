import React from 'react';
import Product from '../../molecules/Product';
import './index.scss';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {
        products.map(product => (
          <Product 
            key={product._id} 
            name={product.productName} 
            price={product.productPrice}
            description={product.productDescription}
            img={product.productImage}
            // You can pass other properties similarly if needed
          />
        ))
      }
    </div>
  );
};

export default ProductList;
