import { useState } from "react";

function StateExample3(){
    const[color, setcolor] = useState("pink");
    const [bold, setBold] = useState(false);
    return (
        <div>
            <input type="radio" name="color" onChange={() => setcolor("orange")}/>
            {"orange"}
            <br />
            <input type="radio" name="color" onChange={() => setcolor("red")}/>
            {"red"}
            <br />
            <input type="radio" name="color" onChange={() => setcolor("green")}/>
            {"green"}
            <br />
            <p style={{color : color}}>This is a text content for display.</p>

            <input type="checkbox" onChange={(e) => setBold(e.target.checked)}/>
            {"bold"}
            
        </div>
    );
}
export default StateExample3;