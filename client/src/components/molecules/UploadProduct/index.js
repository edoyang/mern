import React, { useState } from 'react';
import axios from 'axios';

const UploadProduct = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      setFile(reader.result);
    };
  
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };
  

  const handleUpload = async () => {
    const productData = {
      productImage: file,
      name: name,
      price: parseFloat(price),
      description: description,
      isActive: isActive,
      category: category,
      tags: tags.split(',').map(tag => tag.trim())  // Assuming comma-separated tags
    };

    try {
      const response = await axios.post('http://localhost:5000/products/post', productData);
      console.log(response.data);
      // Handle the response from the server as needed
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  return (
    <div>
      <h2>Product Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="checkbox" checked={isActive} onChange={() => setIsActive(!isActive)} /> IsActive
      <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
      <input type="text" placeholder="Tags" value={tags} onChange={e => setTags(e.target.value)} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadProduct;