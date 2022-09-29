import { BrowserRouter, Link, Routes , Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import Home from './home';
import Contact from './contact';
import Rentacar from './rentacar';

  
function App() {
    return (
        <div className='App'>
         <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>}/>
    
          <Route path="/rentacar" element ={<Rentacar/>}/>
        </Routes>
      </BrowserRouter>
        
        
  

            

        </div>
     
     
    )
}
  
export default App
