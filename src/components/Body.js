import RestaurantCard from "../RestaurantCard";
import resList from "../components/Utils/mockData";
import { useState } from "react";


const Body = () =>{
    const [listOfRestaurants,setlistOfRestaurants] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    let filteredRes = resList.filter((res)=>{
                        return res.info.avgRatingString >4.5;
                    });
                    setlistOfRestaurants(filteredRes);
                    }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                  listOfRestaurants.map((restaurent)=>{
                    return <RestaurantCard key={restaurent.info.id} resData={restaurent}/>;
                  })
                }
            </div>
        </div>
    )
}

export default Body;