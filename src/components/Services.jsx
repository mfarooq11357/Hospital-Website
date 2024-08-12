import React from 'react';
import ProductCard from './ProductCard';
import './Services.css';



const Services = () => {
  const products = [
    {
      image: 'https://i0.wp.com/sultancotton.com/wp-content/uploads/2020/04/11.png?w=1200&ssl=1',
      description: 'Pearl White Absorbent Cotton Roll BPC'
    },
    {
      image: 'https://i0.wp.com/sultancotton.com/wp-content/uploads/2020/04/11.png?w=1200&ssl=1',
      description: 'Pearl White Crepe Bandage BP'
    },
    {
      image: 'https://i0.wp.com/sultancotton.com/wp-content/uploads/2020/04/11.png?w=1200&ssl=1',
      description: 'Pearl White Cotton Bandage BP'
    },
    {
      image: 'https://i0.wp.com/sultancotton.com/wp-content/uploads/2020/04/11.png?w=1200&ssl=1',
      description: 'Pearl White Absorbent Cotton Roll BPC'
    },
    {
      image: 'https://i0.wp.com/sultancotton.com/wp-content/uploads/2020/04/11.png?w=1200&ssl=1',
      description: 'Pearl White Crepe Bandage BP'
    },
    {
      image: 'https://i0.wp.com/sultancotton.com/wp-content/uploads/2020/04/11.png?w=1200&ssl=1',
      description: 'Pearl White Cotton Bandage BP'
    },
    {
      image: 'https://i0.wp.com/sultancotton.com/wp-content/uploads/2020/04/11.png?w=1200&ssl=1',
      description: 'Pearl White Absorbent Cotton Roll BPC'
    },
    {
      image: 'https://i0.wp.com/sultancotton.com/wp-content/uploads/2020/04/11.png?w=1200&ssl=1',
      description: 'Pearl White Crepe Bandage BP'
    },
    {
      image: 'https://i0.wp.com/sultancotton.com/wp-content/uploads/2020/04/11.png?w=1200&ssl=1',
      description: 'Pearl White Cotton Bandage BP'
    }

  ];



  return (
    <div className="app">
   <h1 style={{ fontSize: '2em' }}>PEARL WHITE PRODUCTS</h1>
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} image={product.image} description={product.description} />
      ))}
    </div>
  </div>
  );
};

export default Services;
