import { useDispatch } from "react-redux";
import { CDN_URL } from "./Utils/constants";
import { addItem } from "./CartSlice";

const ItemList = ({items}) =>{
    
    const dispatch = useDispatch();
    
    const handleAddItem = (item) =>{
        dispatch(addItem(item))
    }

    return(
        <div>
            {items.map((item)=>{
                return <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
                    <div className="w-9/12 mr-">
                        <div className="py-2">
                            <span className="font-semibold">{item.card.info.name}</span>
                            <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span> 
                        </div>
                        <p className="text-xs pt-2">
                            {item.card.info.description}
                        </p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute"><button className="p-2 bg-black text-white shadow-lg mx-[4.5rem] rounded-lg mt-28" onClick={()=>handleAddItem(item)}>Add +</button></div>
                        <img src={CDN_URL+item.card.info.imageId} className="ml-8 w-auto" />
                    </div>
                    </div> 
            })}

        </div>
    );
}

export default ItemList;