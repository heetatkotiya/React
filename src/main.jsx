import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StringList from './6th sem/array'
// import ApoiSimulation from './6th sem/hookuseeffect1'
// import ApoiSimulation1 from './6th sem/countdownuseeffect'
//  import StateABC from './6th sem/segment1.jsx'
// import ABC from './6th sem/index.jsx'
// import App from './6th sem/login.jsx'
// import EcommerceHomePage from './6th sem/login.jsx'
// import StateExample from './6th sem/hookexample1.jsx'
// import StateExample2 from './6th sem/hookexample2.jsx'
// import StateExample3 from './6th sem/hookexample3.jsx'
// import MyList from './6th sem/MYList.jsx'
// import MyButton from './6th sem/mybtn.jsx'
// import MyComponent from './6th sem/Component.jsx'
const stringArray = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StringList items={stringArray}/>
</StrictMode>,

)