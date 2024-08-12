
import React, { useState,useEffect } from 'react';
import './ProductCard.css';
import ScrollReveal from 'scrollreveal';

const ProductCard = ({ image, description }) => {
  useEffect(() => {
    const sr = ScrollReveal();
    const revealConfig = {
      origin: 'bottom',
      distance: '10px',
      duration: 1000,
      delay: 200,
    };

    sr.reveal('.product-card, .product-description, .view-details', revealConfig);
  }, []);
  return (
    <div className="product-card">
      <img src={image} alt={description} className="product-image" />
      <p className="product-description">{description}</p>
      <button className="view-details">View Details</button>
    </div>
  );
};

export default ProductCard;
