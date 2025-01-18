import React from "react";

function StringList({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li> // Use index as a unique key
            ))}
        </ul>
    );
}
export default StringList;

