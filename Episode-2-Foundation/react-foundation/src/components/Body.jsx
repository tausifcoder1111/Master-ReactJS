import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "./restaurants";

const Body = () => {
  const [restaurantsData, setRestaurantsData] = useState(restaurants);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9114575&lng=75.3186241&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log("JSON", json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterHandler = () => {
    const filterdList = restaurants.filter((res) => res.rating >= 4.5);
    setRestaurantsData(filterdList);
  };

  const showAll = () => {
    setRestaurantsData(restaurants);
  };

  return (
    <>
      <div className="body">
        {/* Search Bar */}

        {/* Filter */}
        <button className="filter-btn" onClick={filterHandler}>
          Top Rated Restaurants
        </button>
        <button className="filter-btn" onClick={showAll}>
          Show All
        </button>

        {/* Restaurant Container */}
        <div className="rest-container">
          {/* Restaurant cards */}
          {restaurantsData.map((restaurant) => (
            <RestaurantCard key={restaurant.id} data={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
