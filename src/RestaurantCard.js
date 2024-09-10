import { CDN_URL } from "./components/Utils/constants";

const StyleCard = {
    backgroundColor: "#f0f0f0",
};

const RestaurentCard = (props) => {
    const {resData} = props;
   // const {cloudinaryImageId,name,cuisines,avgRatingString} = resData.info;
    return(
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300" /*style={StyleCard}*/>
            <img className="res-logo rounded-lg" src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRatingString+" Star"}</h4>
            <h4>{resData.info.costForTwo}</h4>
        </div>
    )
}

export default RestaurentCard;