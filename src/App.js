import React, { lazy , Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./components/Utils/UserContext.js";
//import Grocery from "./components/Grocery.js";
 



//not using keys(not acceptable) <<< index as a key <<< unique id (best practise)
// resList.map((restaurent,index)=>{
 //   return <RestaurentCard key= {index} resData={restaurent}/>;
 //always pass a key whenever we loop because its help react in rendering fast , it helps whenever there is a change in data.

const Grocery = lazy(()=>import("./components/Grocery.js"));

const AppLayout = () => {

    const[userInfo,setuserInfo] = useState();

    useEffect(()=>{
        //Make an API call to get user info
        const data = {
            name : "Parth Garg",
        }
        
        setuserInfo(data.name);
    },[])

    console.log({userInfo});
    return(
        <UserContext.Provider value={{loggedInUser : userInfo , setuserInfo}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>,
            },
            {
                path : "/about",
                element : <AboutUs/>,
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu/>
            },
            {
                path : "/grocery",
                element :<Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense> 
            }
        ],
        errorElement : <Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);