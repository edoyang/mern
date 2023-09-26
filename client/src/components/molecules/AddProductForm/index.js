import React, { useState } from 'react';
import './AddProductForm.scss';

const AddProductForm = () => {
    const [product, setProduct] = useState({
        productName: '',
        productPrice: '',
        productDescription: '',
        productImage: '',
        stock: '',
        category: '',
        tags: '',
        isActive: false,
        manufacturer: '',
        origin: '',
        height: '',
        width: '',
        weight: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: checked
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProduct(product);
        // Reset form or navigate away, or give some feedback to the user
    }
    
    const addProduct = async (productData) => {
        try {
            const response = await fetch('http://localhost:5000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });
            
            if (!response.ok) {
                throw new Error('Failed to add product');
            }
    
            const data = await response.json();
            // Handle the response as necessary, e.g. display a message, navigate to a different page, etc.
        } catch (error) {
            // Handle error, e.g. display an error message to the user
            console.error(error.message);
        }
    };    
    
    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <label>
                Product Name:
                <input 
                    type="text"
                    name="productName"
                    value={product.productName}
                    onChange={handleChange}
                />
            </label>
    
            <label>
                Product Price:
                <input 
                    type="number"
                    name="productPrice"
                    value={product.productPrice}
                    onChange={handleChange}
                />
            </label>
    
            <label>
                Product Description:
                <textarea 
                    name="productDescription"
                    value={product.productDescription}
                    onChange={handleChange}
                />
            </label>
    
            <label>
                Product Image URL:
                <input 
                    type="text"
                    name="productImage"
                    value={product.productImage}
                    onChange={handleChange}
                />
            </label>
    
            <label>
                Stock:
                <input 
                    type="number"
                    name="stock"
                    value={product.stock}
                    onChange={handleChange}
                />
            </label>
    
            <label>
                Category:
                <input 
                    type="text"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                />
            </label>
    
            <label>
                Tags (comma separated):
                <input 
                    type="text"
                    name="tags"
                    value={product.tags}
                    onChange={handleChange}
                />
            </label>
    
            <label>
                Product is Active?
                <input 
                    type="checkbox"
                    name="isActive"
                    checked={product.isActive}
                    onChange={handleCheckboxChange}
                />
            </label>
            <button type="submit">Add Product</button>
        </form>
    );    
}

export default AddProductForm;