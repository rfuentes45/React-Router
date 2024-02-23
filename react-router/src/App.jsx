import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom' // this is what we imported 
import Red from './components/Red' // this is what we imported 
import Blue from './components/Blue' // this is what we imported 
import Home from './components/Home' // this is what we imported 

function App() {
  
  return (  // the empty brackets mean React Fragment
    <>
   <div id="container">
      
      <div id="navbar">  
      <Link to = "/Blue"> Blue</Link>
      <Link to = "/Red"> Red </Link>
      <Link to = "/">  Home </Link>
      </div> 
     
      
      <div id="main-section">{/* routes here */}
      
      <Routes>  
      <Route path="/blue" Component={Blue}/> 
      <Route path="/red" Component={Red}/>
      <Route path="/" Component={Home}/> // we use the 'component' keyword 
      </Routes>
      
      </div>
    
    </div>
    </>
  )
}

export default App
