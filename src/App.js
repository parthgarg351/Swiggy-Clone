import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Error from "./components/Error";
 



//not using keys(not acceptable) <<< index as a key <<< unique id (best practise)
// resList.map((restaurent,index)=>{
 //   return <RestaurentCard key= {index} resData={restaurent}/>;
 //always pass a key whenever we loop because its help react in rendering fast , it helps whenever there is a change in data.


const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
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
        ],
        errorElement : <Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);