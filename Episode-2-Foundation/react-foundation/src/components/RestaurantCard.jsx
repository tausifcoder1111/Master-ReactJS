import React from "react";

/**
 *
 * Restaurant Card
 * Image
 * Name Of Restaurant, Star Rating, Cuisines
 *
 */
const RestaurantCard = ({data}) => {
    // Destructuring  
    const {name,rating,image,cuisines,costForTwo,distance,location,offer1,offer2} = data;
  return (
    <>
      <div className="restaurant-card">
        <div className="image-container">
          <img
            src={image}
            alt="Restaurant"
            loading="lazy"
          />
          <div className="rating">
            ⭐ {rating}
          </div>
          <div className="name">
           {name}
          </div>
        </div>

        {/* content Section */}
        <div className="card-content">
        <p className="cuisine">{cuisines}</p>

        <div className="details">
          <span>{costForTwo}</span>
          <span className="dot">•</span>
          <span>{distance}</span>
        </div>

        <p className="location">{location}</p>

        <p className="booking">🪑 Table booking</p>

        <div className="offer primary">
          {offer1} <span>+2 more</span>
        </div>

        <div className="offer secondary">
          {offer2}
        </div>
      </div>


      </div>
    </>
  );
};

export default RestaurantCard;
