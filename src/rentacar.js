import React from "react";


function Rentacar(){
    const title1 = "PORSCHE 911"
    const title2 = "AUDI R8 SUPER SPORT"
    const title3 = "CHEVEROLET CAMARO"
    const avail = 'Available'
    const price1 = '3000'
    const price2 = '5000'
    const price3 = '2500'
    return(
        <div>
            <section className="Rmain">
                <nav className="Rnavbar">
                <ul className="Rnav">
                  <li><a href="/">HOME</a></li>
                  <li><a href="/contact">CONTACT US </a></li>
                </ul>
                </nav>
                

                <div className="container1">
                    
                    <p>{title1}</p> 
                    <div className="Carpic1">
                    </div>
                    <h1>{avail}</h1>
                    <h2>PRICE : Rs{price1} / DAY </h2>
                    <a href="/contact">
                    <button type="button" 
                    className="BOOKBTN">BOOK NOW</button>
                    </a>
                </div>

                <div className="container2">
                    
                    <p>{title2}</p> 
                    <div className="Carpic2">
                    </div>
                    <h1>{avail}</h1>
                    <h2>PRICE : Rs{price2} / DAY </h2>
                    <a href="/contact">
                    <button type="button" 
                    className="BOOKBTN">BOOK NOW</button>
                    </a>
                </div>



                <div className="container3">
                    
                    <p>{title3}</p> 
                    <div className="Carpic3">
                    </div>
                    <h1>{avail}</h1>
                    <h2>PRICE : Rs{price3} / DAY </h2>
                    <a href="/contact">
                    <button type="button" 
                    className="BOOKBTN">BOOK NOW</button>
                    </a>
                </div>




            
            </section>
        </div>

    );
}






export default Rentacar 