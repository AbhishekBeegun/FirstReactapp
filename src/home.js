import React from "react";
import { BrowserRouter,Link,Route,Routes} from "react-router-dom";


function Home(){
    return(
         <div> 
         <section class="section">
        
             <div class="box-main">
                 <div class="title">
                     <h1>
                     Long-journey<br></br>experience with short<br></br>
                     commute convienence
                     </h1>
                 </div>
                 
              
                <nav className="navbar">
                    <ul className="nav-list">
                    <li><a href="/rentacar" >RENT A CAR</a></li>
                    <li><a href="/contact">CONTACT US</a></li>
                    <Link to ="/SOURCECODE" >SOURCE CODE LINK</Link>
                    
                    </ul>
                    
                </nav>
              
            
                 
                 
                 <div className='Rentacar '>
                 <a href="/rentacar">
                    
                     <button type="button" 
                     className="rentbtn">RENT A CAR
                     </button>
                     </a>
                    
                 </div>

                 <div className='Carcontainer'>
                 </div>

                 <div className='simplepoint'>
                     
                 </div>
             </div>   
         </section>
     </div>

    );
}






export default Home 