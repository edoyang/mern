import React, { useState, useEffect } from 'react';
import './UpdateProductForm.scss';

function UpdateProductForm() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const [message, setMessage] = useState("");

  const handleTagChange = (e, index) => {
    const updatedTags = [...selectedProduct.tags];
    updatedTags[index] = e.target.value;
    setSelectedProduct(prevProduct => ({
      ...prevProduct,
      tags: updatedTags
    }));
  };
  
  const addTag = () => {
    setSelectedProduct(prevProduct => ({
      ...prevProduct,
      tags: [...prevProduct.tags, ""]
    }));
  };
  
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedProduct(prevProduct => ({
      ...prevProduct,
      [name]: checked
    }));
  };
  
  const handleDimensionChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct(prevProduct => ({
      ...prevProduct,
      dimensions: {
        ...prevProduct.dimensions,
        [name]: value
      }
    }));
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/products/${selectedProduct._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedProduct)
      });

      if (response.ok) {
        window.alert("Product Updated!");
        window.location.reload(); // Refresh the page
      } else {
        // Handle possible errors from the server response here if necessary
      }

    } catch (error) {
      console.error('Error:', error);
    }
};


return (
    <div className="update-product">
      <ul>
        {products
          .sort((a, b) => a.productName.localeCompare(b.productName))
          .slice(0, 50)  // Slice after sorting to get the top 50 sorted products
          .map(product => (
            <li key={product._id}>
              <button onClick={() => handleSelectProduct(product)}>
                {product.productName}
              </button>
            </li>
          ))
        }
      </ul>

{selectedProduct && (
    <form onSubmit={handleSubmit}>
        <label>
            Product Name:
            <input 
                type="text"
                name="productName"
                value={selectedProduct.productName}
                onChange={handleChange}
            />
        </label>

        <label>
            Product Price:
            <input 
                type="number"
                name="productPrice"
                value={selectedProduct.productPrice}
                onChange={handleChange}
            />
        </label>

        <label>
            Product Description:
            <textarea 
                name="productDescription"
                value={selectedProduct.productDescription}
                onChange={handleChange}
            />
        </label>

        <label>
            Stock:
            <input 
                type="number"
                name="stock"
                value={selectedProduct.stock}
                onChange={handleChange}
            />
        </label>

        <label>
            Product Image Path:
            <input 
                type="text"
                name="productImage"
                value={selectedProduct.productImage}
                onChange={handleChange}
            />
        </label>

        <label>
            Category:
            <input 
                type="text"
                name="category"
                value={selectedProduct.category}
                onChange={handleChange}
            />
        </label>

        {/* Tags */}
        {selectedProduct.tags.map((tag, index) => (
            <label key={index}>
                Tag {index + 1}:
                <input 
                    type="text"
                    name={`tag-${index}`}
                    value={tag}
                    onChange={e => handleTagChange(e, index)}
                />
            </label>
        ))}

        <button type="button" onClick={addTag}>Add Tag</button>

        <label>
            Is Active:
            <input 
                type="checkbox"
                name="isActive"
                checked={selectedProduct.isActive}
                onChange={handleCheckboxChange}
            />
        </label>
        <button type="submit">Update Product</button>
    </form>
)}


    </div>
  );
}

export default UpdateProductForm;
