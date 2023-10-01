import React, { useState, useEffect, useRef } from 'react';
import './UpdateProductForm.scss';

function UpdateProductForm() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const fileInput = useRef(null);


  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await fetch(`http://localhost:5000/products/get`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Fetching products failed:', error);
        }
    };
    fetchProducts();
  }, []);

  const handleTagChange = (e, index) => {
    const updatedTags = [...selectedProduct.tags];
    updatedTags[index] = e.target.value;
    setSelectedProduct(prevProduct => ({ ...prevProduct, tags: updatedTags }));
  };
  
  const addTag = () => {
    setSelectedProduct(prevProduct => ({ ...prevProduct, tags: [...prevProduct.tags, ""] }));
  };
  
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedProduct(prevProduct => ({ ...prevProduct, [name]: checked }));
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/products/put/${selectedProduct._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedProduct)
      });

      if (response.ok) {
        window.alert("Product Updated!");
        window.location.reload();
      } else {
        // Handle possible errors from the server response here if necessary
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        setSelectedProduct(prevProduct => ({
            ...prevProduct,
            productImage: reader.result
        }));
    };

    if (file) {
        reader.readAsDataURL(file);
    }
};

  return (
    <div className="update-product">
      <ul>
        {products
          .sort((a, b) => a.name.localeCompare(b.name))  // Updated to 'name'
          .slice(0, 50)  // Slice after sorting to get the top 50 sorted products
          .map(product => (
            <li key={product._id}>
              <button onClick={() => handleSelectProduct(product)}>
                {product.name}
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
                name="name"
                value={selectedProduct.name}  // Updated to 'name'
                onChange={handleChange}
            />
          </label>
          <label>
            Product Price:
            <input 
                type="number"
                name="price"  // Updated to 'price'
                value={selectedProduct.price}  // Updated to 'price'
                onChange={handleChange}
            />
          </label>
          <label>
            Product Description:
            <textarea 
                name="description"  // Updated to 'description'
                value={selectedProduct.description}  // Updated to 'description'
                onChange={handleChange}
            />
          </label>
          <label>
              Product Image:
              <input 
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }} // this will hide the default file input
                  ref={fileInput}
              />
              <button type="button" onClick={() => fileInput.current.click()}>Upload Image</button>
          </label>
          {/* The image will be shown below if there's any */}
          {selectedProduct.productImage && (
              <img src={selectedProduct.productImage} alt="Uploaded Preview" width="200"/>
          )}
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