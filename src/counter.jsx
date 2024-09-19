import { useState } from "react"
import "./hello.css";

export default function Counter(){
    const[count,setCount] = useState(0);
    const[value,setValue] = useState("Type Here!");
    
    return(<>
    <input type="text"
        alt="Type Here!" 
        value={value}
        onChange={(e)=>setValue(e.target.value)}/>
        <h1>word : {value.length}</h1>
        <button onClick={ () => setCount(count+1)}>Click</button> 
        <button onClick={ () => setCount(0)}>Reset</button>
        <p>you have click ..{count}..</p>
        
        
        
    </>)

}