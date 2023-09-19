import React, { useState, useEffect } from 'react';
import { Gap, Input, Navbar } from '../../components';
import ProductList from '../../components/molecules/ProductList';
import './Home.scss';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend
    fetch('http://localhost:5000/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Set products state with fetched data
        setProducts(data);
      })
      .catch(error => {
        console.log('There was a problem fetching products:', error.message);
      });
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div>     
      <Navbar />
      <div className='home-page'>
        <Input className="search" label="search" placeholder="Search for flowers" />
        <Gap height={30}/>
        <div className='home'>
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
