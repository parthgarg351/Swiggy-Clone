import RestaurantCard,{withPromotedLabel} from "../RestaurantCard";
//import resList from "../components/Utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { HANU_URL, JAIPUR_URL, SIRSA_URL } from "./Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Utils/useOnlineStatus";

const Body = () =>{
    const [listOfRestaurants,setlistOfRestaurants] = useState([]);
    const [filteredRestaurants,setfilteredRestaurants] = useState([]);

    const [searchText,setsearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async () => {
        //const data = await fetch(SIRSA_URL);
        //const data = await fetch(HANU_URL);
        const data = await fetch(JAIPUR_URL);
        
        console.log(listOfRestaurants);
        const json = await data.json();
        //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        //Optional Chaining
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false){
        return <h1>You are offline. Please check your internet connection.</h1>
    }
    

    if(listOfRestaurants.length===0){
        return <Shimmer/>
    }

    return(
        <div className="body">
            <div className="filter flex ">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}></input>
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        let filteredRes2 = listOfRestaurants.filter((res)=>{
                           return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setfilteredRestaurants(filteredRes2);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center"> 
                    <button className="filter-btn px-4 py-1 bg-gray-100 rounded-lg" onClick={()=>{
                        let filteredRes = listOfRestaurants.filter((res)=>{
                            return res.info.avgRatingString >4.5;
                        });
                        setfilteredRestaurants(filteredRes);
                    }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {
                    filteredRestaurants.map((restaurent) => {
                      return (
                        <Link key={restaurent.info.id} to={"/restaurants/" + restaurent.info.id}>
                          {restaurent.info.avgRatingString > 4.0 ? (
                            <RestaurantCardPromoted resData={restaurent}/>
                          ) : (
                            <RestaurantCard resData={restaurent} />
                          )}
                        </Link>
                      );
                    })
                }
            </div>
        </div>
    )
}

export default Body;