import { CDN_URL } from "./components/Utils/constants";

const StyleCard = {
    backgroundColor: "#f0f0f0",
};

const RestaurentCard = (props) => {
    const {resData} = props;
   // const {cloudinaryImageId,name,cuisines,avgRatingString} = resData.info;
    return(
        <div className="res-card" style={StyleCard}>
            <img className="res-logo" src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.avgRatingString}</h4>

        </div>
    )
}

export default RestaurentCard;