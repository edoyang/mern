import React, { useState, useEffect } from 'react';
import { Gap, Input, Navbar } from '../../components';
import ProductList from '../../components/molecules/ProductList';
import './Home.scss';
import { BgMain } from '../../assets';
import Listing from '../../components/atoms/Listing';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products/get')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.log('There was a problem fetching products:', error.message);
        // Perhaps set an error state here and show a user-friendly error message on the page.
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className='home-page'>
        <Input className="search" label="search" placeholder="Search for flowers" />
        <Gap height={30} />
        <Listing className="listing" />
        <div className='home'>
        <Gap height={100} />
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default Home;
