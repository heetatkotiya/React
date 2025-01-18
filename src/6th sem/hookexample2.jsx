import { useState } from "react";

function StateExample2(){
    const [name, setName] = useState("rku");
    return(
        <div>
            <h1>{name}</h1>
            
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}
export default StateExample2;
