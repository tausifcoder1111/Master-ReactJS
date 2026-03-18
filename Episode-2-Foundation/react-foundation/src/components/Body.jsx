import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9114575&lng=75.3186241&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;


        console.log("json",json)
        console.log("restaurants",restaurants)


    const formattedData = restaurants.map((res) => ({
      
      id: res.info.id,
      name: res.info.name,
      rating: res.info.avgRating,
       image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    res.info.cloudinaryImageId,
      cuisines: res.info.cuisines.join(", "),
      costForTwo: res.info.costForTwo,
      distance: res.info.sla.slaString,
      location: res.info.areaName,
      offer1: res.info.aggregatedDiscountInfoV3?.header || "",
      offer2: res.info.aggregatedDiscountInfoV3?.subHeader || "",
    }));

    setRestaurantsData(formattedData);
    setAllRestaurants(formattedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterHandler = () => {
    const filtered = allRestaurants.filter((res) => res.rating >= 4.5);
    setRestaurantsData(filtered);
  };

  const showAll = () => {
    setRestaurantsData(allRestaurants);
  };

  return (
    <div className="body">
      <button className="filter-btn" onClick={filterHandler}>
        Top Rated Restaurants
      </button>

      <button className="filter-btn" onClick={showAll}>
        Show All
      </button>

      <div className="rest-container">
        {restaurantsData.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={"/restaurants/" + restaurant.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <RestaurantCard data={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;