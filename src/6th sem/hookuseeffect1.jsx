import * as React from "react";

function fetchUserData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "John Doe",
                age: 30
            });
        }, 2000);
    })
}
function ApoiSimulation(){
    const[name,setName] = React.useState("loading...")
    const[age, setAge] = React.useState("loading...")
    React.useEffect(() => {
        fetchUserData() .then((abc) =>{
            setName(abc.name)
            setAge(abc.age)
        });
    });
    return(
        <div>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
        </div>
    );
}

export default ApoiSimulation;



