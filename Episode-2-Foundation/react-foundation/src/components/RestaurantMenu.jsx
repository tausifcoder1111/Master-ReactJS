// import React from 'react'
// import { useParams } from 'react-router-dom'
// function RestaurantMenu() {
//     let params = useParams();
//     console.log("d",params)

//   return (
//     <div>RestaurantMenu</div>
//   )
// }

// export default RestaurantMenu



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

  const { resId } = useParams();
  console.log("resId",resId)
  const [menuData, setMenuData] = useState(null);

const fetchMenu = async () => {
  try {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9114575&lng=75.3186241&restaurantId=${resId}`
    );

    const text = await data.text();   // safer

    if (!text) {
      console.log("Empty response from API");
      return;
    }

    const json = JSON.parse(text);

    console.log("MENU DATA", json);

    setMenuData(json?.data);

  } catch (err) {
    console.error("Fetch error:", err);
  }
};

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  if (menuData === null) return <h1>Loading...</h1>;

  const info = menuData?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{info?.name}</h1>
      <h3>{info?.cuisines?.join(", ")}</h3>
      <h4>{info?.costForTwoMessage}</h4>
      <h4>⭐ {info?.avgRating}</h4>
    </div>
  );
};

export default RestaurantMenu;