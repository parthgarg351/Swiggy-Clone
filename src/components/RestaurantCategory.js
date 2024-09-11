import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory =({data,showItem,setshowIndex}) =>{
    
    // const [showItem,setshowItem] = useState(false)
    
    const handleClick = () =>{
        setshowIndex();
    }

    return <div>
        {/* header */}
        <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {showItem && <ItemList items={data.itemCards}/>}
        </div>
        {/* Accordion Body */}
    </div>
}

export default RestaurantCategory;