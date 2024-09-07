import { useState } from "react";
import { LOGO_URL } from "./Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Utils/useOnlineStatus";

const Header = () => {
    const [btnName,setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>{onlineStatus ?"🟢" : "🔴"}</li>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/about">About Us</Link></li>
                    <li><Link to ="/contact">Contact Us</Link></li>
                    <li><Link to ="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        btnName==="Login" ? setbtnName("Logout") : setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;