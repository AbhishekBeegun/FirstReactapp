import React from "react";


function Contact(){
    return(
        <div>
        <section className="Cmain">
           <nav className="Cnavbar">
            <ul className="Cnav">
            <li><a href="/">HOME</a></li>
            <li><a href="/rentacar">RENT A CAR </a></li>
           </ul>
           </nav>


           <div className="Recpic">

           </div>

           <div className="Ctitile">
           <h1>LET'S GET</h1> <p>IN TOUCH </p>
           </div>

           <div className="Socialbox1">
              <h2>TALK TO A STAFF MEMBER</h2>
              <button type="button" 
              className="givecallbtn">CALL A STAFF</button>
           </div>

           <div className="Socialbox2">
            <h2>SEND US A MESSAGE<br></br>SOCIAL MEDIA</h2>

           </div>


        
        </section>
    </div>

    );
}






export default Contact 