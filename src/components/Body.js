import RestaurantCard from "../RestaurantCard";
import resList from "../components/Utils/mockData"

const Body = () =>{
    return(
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="res-container">
                {
                  resList.map((restaurent)=>{
                    return <RestaurantCard key={restaurent.info.id} resData={restaurent}/>;
                  })
                }
            </div>
        </div>
    )
}

export default Body;