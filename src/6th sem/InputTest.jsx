import * as React from "react";
class InputTest extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter your name" />
                <br/>
                <input type="checkbox" />
                <label>Remember Me</label>
                <br/>
                <input type="radio" />
                <label>Radio Button</label>
                <br/>
                <input type="color" />
                <label>Color Plate</label>
                <br/>
                <input type="button" />
                <label>Button</label>
            </div>
            
        )
    }
}

export default InputTest;