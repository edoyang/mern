import React, { useState/*, useEffect */}from 'react';
import { Gap, Input, Navbar } from '../../components';
import ProductList from '../../components/molecules/ProductList';
import './Home.scss';

const Home = () => {
/*  const [products, setProducts] = useState([]);

  useEffect(() => {
    // For demonstration purposes, we're using static data. 
    // In a real-world scenario, you might fetch this data from an API.
    const fetchedProducts = [
      // ... your product data here
    ];

    setProducts(fetchedProducts);
  }, []);
*/

const [products, /*setProducts*/] = useState([
  {
    id: 1,
    name: "Red Rose",
    price: 10.99,
    description: "A beautiful red rose.",
    img: "/path/to/red-rose.jpg"
  },
  {
    id: 2,
    name: "Yellow Tulip",
    price: 8.50,
    description: "A vibrant yellow tulip.",
    img: "/path/to/yellow-tulip.jpg"
  },
  {
    id: 3,
    name: "Purple Orchid",
    price: 12.99,
    description: "A stunning purple orchid.",
    img: "/path/to/purple-orchid.jpg"
  },
  {
    id: 4,
    name: "White Lily",
    price: 9.99,
    description: "An elegant white lily.",
    img: "/path/to/white-lily.jpg"
  },
  {
    id: 5,
    name: "Pink Carnation",
    price: 7.99,
    description: "A delicate pink carnation.",
    img: "/path/to/pink-carnation.jpg"
  },
  {
    id: 6,
    name: "Blue Hydrangea",
    price: 11.50,
    description: "A vibrant blue hydrangea.",
    img: "/path/to/blue-hydrangea.jpg"
  },
  {
    id: 7,
    name: "Sunflower",
    price: 6.99,
    description: "A cheerful sunflower.",
    img: "/path/to/sunflower.jpg"
  },
  {
    id: 8,
    name: "Lavender",
    price: 8.99,
    description: "Calming lavender flowers.",
    img: "/path/to/lavender.jpg"
  },
  {
    id: 9,
    name: "Orange Marigold",
    price: 7.50,
    description: "Bright orange marigold blooms.",
    img: "/path/to/orange-marigold.jpg"
  },
  {
    id: 10,
    name: "Pink Peony",
    price: 13.99,
    description: "A romantic pink peony.",
    img: "/path/to/pink-peony.jpg"
  },
  {
    id: 11,
    name: "Daisy",
    price: 5.50,
    description: "Simple and charming daisy flowers.",
    img: "/path/to/daisy.jpg"
  },
  {
    id: 12,
    name: "Violet Iris",
    price: 9.50,
    description: "Elegant violet iris blossoms.",
    img: "/path/to/violet-iris.jpg"
  },
]);
  return (
    <div>     
      <Navbar />
      <div className='home-page'>
        <Input className = "search" label="search" placeholder="Search for flowers" />
        <Gap height={30}/>
        <div className='home'>
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
