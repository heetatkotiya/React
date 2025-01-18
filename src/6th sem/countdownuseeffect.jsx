import * as React from "react";

function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "John Doe",
                age: 30,
            });
        }, 2000);
    });
}

function ApoiSimulation1() {
    const [name, setName] = React.useState("loading...");
    const [age, setAge] = React.useState("loading...");
    const [countdown, setCountdown] = React.useState(300); // Initialize countdown in seconds (5 minutes)

    // Fetch user data
    React.useEffect(() => {
        fetchUserData().then((abc) => {
            setName(abc.name);
            setAge(abc.age);
        });
    }, []);

    // Countdown logic
    React.useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(timer); // Cleanup timer
        }
    }, [countdown]);

    // Format countdown into MM:SS
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Countdown: {formatTime(countdown)}</h2>
        </div>
    );
}

export default ApoiSimulation1;
