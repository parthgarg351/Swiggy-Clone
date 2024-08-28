import RestaurantCard from "../RestaurantCard";
//import resList from "../components/Utils/mockData";
import { useState,useEffect } from "react";


const Body = () =>{
    const [listOfRestaurants,setlistOfRestaurants] = useState([]);
    
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.5320731&lng=75.03177339999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        //Optional Chaining
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    let filteredRes = listOfRestaurants.filter((res)=>{
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