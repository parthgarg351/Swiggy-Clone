import React from "react";
import User from "./User";

class UserClass extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state={
            count : 0,
            count2 : 1,
            userInfo:{
                name2 : "Dummy",
                location2 : "Dummy",
                avatar_url : "",
            },
        };
    }
    
    async componentDidMount(){
        //it is mounted on the webpage after render function is redered completely
        //It is used to make api calls
        //Similar to eseEffect()
        const data  = await fetch("https://api.github.com/users/parthgarg351");
        const json  = await data.json();
        console.log(json);
        this.setState({userInfo : json});
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){
        
    }
    

    render(){
        //const {location,name} = this.props;
        const {name,location,avatar_url} = this.state.userInfo

        return <div className="classy">
        <h1>Count : {this.state.count}</h1>
        <h1>Count : {this.state.count2}</h1>
        <button onClick={()=>{
            this.setState({
                count : this.state.count +1,
            })
        }}>Count Increase</button>
        
        <h2>Name: {this.props.name}</h2>
        <h3>Mail Id : parthgarg351@gmail.com</h3>
        <h4>Location : {this.props.location}</h4>
        <h4>-----------------------------</h4>
        <img src={avatar_url}></img>
        <h2>Name: {name} (Github Api)</h2>
        <h4>Location : {location}</h4>

    </div>
    }
}

export default UserClass;