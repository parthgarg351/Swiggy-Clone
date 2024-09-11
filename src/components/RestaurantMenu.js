import { useEffect, useState } from "react";
import useRestaurantMenu from "./Utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
//import { MENU_API } from "./Utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{

    const {resId}  = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex,setshowIndex] = useState(null);

    if(resInfo===null) return (<Shimmer/>);
    
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    //console.log(itemCards)
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            <p>
                {/* Categories acordion */}
                {categories.map((category,index)=>{
                    return(<RestaurantCategory data={category?.card?.card} key={index} showItem={index===showIndex?true:false} setshowIndex={()=>setshowIndex(index)}/>);
                })}
            </p>
        </div>
    );
};

export default RestaurantMenu;