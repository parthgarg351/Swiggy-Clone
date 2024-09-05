import User from "./components/User";
import UserClass from "./components/UserClass";

const AboutUs = () =>{
    return(
        <div>
            <h1>About Me</h1>
            <User name={"Parth Garg (Functional)"}/>
            <UserClass name={"Parth Garg (Class) "}  location ={"Sirsa"}/>
            <h2>I am creating swiggy clone.</h2>
        </div>
    )
};

export default AboutUs;