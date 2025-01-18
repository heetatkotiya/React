import * as React from "react";

class StateABC extends React.Component {
  state = {
    first: false,
    second: 3.14,
    Third: "hello",
    fourth: "Blue",
    fifth: "Red",
  };
  constructor(){
    super(  );
    setInterval(()=> {
        this.setState({
            first: true,
            second: 3.14159,
            Third: "hello world",
            fourth: "red",
            fifth: "Yellow",

        });
    },3000);
  }

  render() {
    const { first, second, Third, fourth, fifth } = this.state; 
    return (
      <div>
        <button disabled={first}>My Button</button>
        <p style={{ color: fourth }}>
          Value of float variable is <strong>{second}</strong>
        </p>
        <p style={{ color: fifth }}>
          Value of string variable is <strong>{Third}</strong>
        </p>
      </div>
    );
  }
}

export default StateABC;

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import StateABC from './6th sem/segment1.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <StateABC />
// </StrictMode>,

// )