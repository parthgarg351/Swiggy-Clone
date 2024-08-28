import RestaurantCard from "../RestaurantCard";
//import resList from "../components/Utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { HANU_URL, SIRSA_URL } from "./Utils/constants";


const Body = () =>{
    const [listOfRestaurants,setlistOfRestaurants] = useState([]);
    
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async () => {
        const data = await fetch(SIRSA_URL);
        //const data = await fetch(HANU_URL);
        
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        //Optional Chaining
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listOfRestaurants.length===0){
        return <Shimmer/>
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