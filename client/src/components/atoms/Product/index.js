import React from 'react';

function Product({ product }) {
  return (
    <div className="product-item">
      <img src={product.productImage} alt={product.name} width="100" />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      {/* Uncomment the line below when ProductPage is ready */}
      {/* <a href={`/products/${product._id}`}>View Details</a> */}
    </div>
  );
}

export default Product;