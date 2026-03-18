import React from "react";
import "./ProductDetails.css";

function ProductDetails() {
  return (
    <div className="page">

      {/* Header */}
      <header className="header">
        <div className="logo">FlipShop</div>

        <input
          className="search"
          placeholder="Search for products, brands and more"
        />

        <div className="header-right">
          <button className="login-btn">Login</button>
          <div className="cart">🛒 Cart</div>
        </div>
      </header>

      {/* Product Section */}
      <div className="product-container">

        {/* Product Image */}
        <div className="image-section">
          <img
            // src="https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/a/b/c/-original-imagqevfyf5y6gkw.jpeg"
            src="https://images.unsplash.com/photo-1621208587196-0b2a7d2aeb03?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product"
          />

          <div className="button-group">
            <button className="add-cart">ADD TO CART</button>
            <button className="buy-now">BUY NOW</button>
          </div>
        </div>

        {/* Product Details */}
        <div className="details-section">

          <h2 className="product-title">
            Sony WH-CH520 Wireless Bluetooth Headphones
          </h2>

          <div className="rating">
            <span className="rating-badge">4.4 ★</span>
            <span className="rating-text">
              12,453 Ratings & 1,200 Reviews
            </span>
          </div>

          <div className="price-section">
            <span className="price">₹2,999</span>
            <span className="old-price">₹5,990</span>
            <span className="discount">50% off</span>
          </div>

          <p className="offer">Special price</p>

          <ul className="features">
            <li>Bluetooth 5.2 Technology</li>
            <li>50 Hours Battery Backup</li>
            <li>Fast Charging Support</li>
            <li>Lightweight & Comfortable</li>
          </ul>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;