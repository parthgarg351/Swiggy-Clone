import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";

 



//not using keys(not acceptable) <<< index as a key <<< unique id (best practise)
// resList.map((restaurent,index)=>{
 //   return <RestaurentCard key= {index} resData={restaurent}/>;
 //always pass a key whenever we loop because its help react in rendering fast , it helps whenever there is a change in data.


const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
    },
    {
        path : "/about",
        element : <AboutUs/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);