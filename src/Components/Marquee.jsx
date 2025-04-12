import React from 'react';
import { FaShoppingCart, FaStar, FaTshirt, FaHatCowboy, FaFemale } from 'react-icons/fa'; 
import './Marquee.css'; 

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <div className="marquee-item"><FaTshirt /> New Collection: Summer Dresses</div>
        <div className="marquee-item"><FaHatCowboy /> Trendy Jackets for Fall</div>
        <div className="marquee-item"><FaFemale /> Latest Winter Apparel</div>
        <div className="marquee-item"><FaShoppingCart /> 50% Off Fashion Accessories</div>
        <div className="marquee-item"><FaStar /> Exclusive Men’s Wear Collection</div>
        <div className="marquee-item"><FaTshirt /> Shop Elegant Evening Gowns</div>
        <div className="marquee-item"><FaShoppingCart /> Perfect Fit Jeans for All Shapes</div>
        <div className="marquee-item"><FaStar /> Fashionable Outerwear Now Available</div>
        <div className="marquee-item"><FaHatCowboy /> Stylish Hats for Winter</div>
        <div className="marquee-item"><FaFemale /> Bold and Beautiful Accessories</div>
        <div className="marquee-item"><FaShoppingCart /> Shop New Fall Collection Now</div>
        <div className="marquee-item"><FaStar /> Trending Sportswear Collection</div>
      </div>
    </div>
  );
};

export default Marquee;
