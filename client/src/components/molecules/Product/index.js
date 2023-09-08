import React from 'react';
import './index.scss';

const Product = ({ name, price, description, img }) => {
  return (
    <div className="product">
      <img src={img} alt={name} className="product-img" />
      <div className="product-name">{name}</div>
      <div className="product-price">${price}</div>
      <div className="product-description">{description}</div>
    </div>
  );
};

export default Product;
