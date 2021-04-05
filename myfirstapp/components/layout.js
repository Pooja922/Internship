import Navbar from "../components/navbar"
import Footer from "../components/footer"
import React from "react";

const layout=({ children })=>{
    return(
        <div className="content">
          <Navbar/>
            {children}
            <hr/>
            <Footer/>
        </div>
    )
}

export default layout