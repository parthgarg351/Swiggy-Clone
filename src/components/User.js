import { useState } from "react";

const User = ({name}) =>{
    const [count,setcount] = useState(0);
    const [count2,setcount2] = useState(1);
    return <div>
        <h1>count : {count}</h1>
        <h1>count : {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Mail Id : parthgarg351@gmail.com</h3>
        <h4>Location : Sirsa</h4>
    </div>
}

export default User;