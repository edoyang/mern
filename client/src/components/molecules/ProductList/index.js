import React from 'react';
import Product from '../../molecules/Product';
import './index.scss';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {
        products.map(product => (
          <Product 
            key={product.id} 
            name={product.name} 
            price={product.price}
            description={product.description}
            img={product.img}
          />
        ))
      }
    </div>
  );
};

export default ProductList;
