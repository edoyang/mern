import React, { useState, useEffect } from 'react';
import './DeleteProduct.scss';


function DeleteProduct() {
  const [products, setProducts] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Fetching products failed:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleDeleteClick = async (productId) => {
    const confirmation = window.confirm("Are you sure you want to delete this product?");
    if (confirmation) {
      try {
        await fetch(`http://localhost:5000/products/${productId}`, {
          method: 'DELETE'
        });
        setProducts(products.filter(product => product._id !== productId));
      } catch (error) {
        console.error('Deleting product failed:', error);
      }
    }
  };

  return (
    <div className="delete-product">
      {isDeleteMode ? (
        <ul>
          {products.sort((a, b) => a.productName.localeCompare(b.productName))
            .map(product => (
              <li key={product._id} 
                  onMouseEnter={() => setProductToDelete(product.productName)}
                  onMouseLeave={() => setProductToDelete(null)}
                  onClick={() => handleDeleteClick(product._id)}>
                {productToDelete === product.productName ? `Delete ${product.productName}?` : product.productName}
              </li>
            ))}
        </ul>
      ) : (
        <button onClick={() => setIsDeleteMode(true)}>Delete Data</button>
      )}
    </div>
  );
}

export default DeleteProduct;
