import RestaurantCard from "./RestaurantCard";
import restaurants from "./restaurants";

const Body = () =>{
    return(
        <>

       <div className="body">

         {/* Search Bar */}


        {/* Restaurant Container */}
        <div className="rest-container">
        {/* Restaurant cards */}
        {
            restaurants.map((restaurant) =>(
                <RestaurantCard key={restaurant.id} data={restaurant}  />
            ))
        }
        </div>
       </div>


        </>
    )
}

export default Body;