import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
    
    const [resInfo,setresInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.5320731&lng=75.03177339999999&restaurantId=183306&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        //console.log(json.data.cards[2]);
        setresInfo(json.data);
    }

    if(resInfo===null) return (<Shimmer/>);

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((x)=>{
                    return(<li>{x.card.info.name} - {x.card.info.price/100}</li>)
                })}
            </ul>
        </div>
    );
};

export default RestaurantMenu;