import { useState,useContext } from "react";
import { LOGO_URL } from "./Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Utils/useOnlineStatus";
import UserContext from "./Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName,setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    
    const {loggedInUser} = useContext(UserContext);

    const cartItem = useSelector((store) => store.cart.items);
    console.log(cartItem);
    //console.log(loggedInUser);
    return(
        <div className="flex justify-between bg-pink-100 mb-2 shadow-lg sm:bg-blue-50 lg:bg-yellow-50">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">{onlineStatus ?"🟢" : "🔴"}</li>
                    <li className="px-4"><Link to ="/">Home</Link></li>
                    <li className="px-4"><Link to ="/about">About Us</Link></li>
                    <li className="px-4"><Link to ="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to ="/cart">Cart({cartItem.length})</Link></li>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                    <button className="login-btn" onClick={()=>{
                        btnName==="Login" ? setbtnName("Logout") : setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;