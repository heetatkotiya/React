import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 style={{ color: 'red',textAlign:'center',fontVariant:'small-caps',backgroundColor:'ButtonFace'}}>This is Heading1</h1>
    <h2 style={{color: 'green',textAlign:'center',fontFamily: 'cursive'}}>This is Heading2</h2> 

    <nav className="navbar" style={{backgroundColor:'maroon',textAlign:'center',padding:'0px',margin:'10px'}}>
      <ul className="menu" style={{display:'inline-flex',listStyleType:'none',gap:'20px'}}>
        <li className="menu-item"><a href="#home" style={{textDecoration:'none',color:'white'}}>Home</a></li>
        <li className="menu-item"><a href="#about" style={{textDecoration:'none',color:'white'}}>About</a></li>
        <li className="menu-item"><a href="#services" style={{textDecoration:'none',color:'white'}}>Services</a></li>
        <li className="menu-item"><a href="#contact" style={{textDecoration:'none',color:'white'}}>Contact</a></li>
      </ul>
    </nav>

 </StrictMode>,

)