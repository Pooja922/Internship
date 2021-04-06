import Header from "./header"
import Footer from "./footer"
import Head from "next/head";

const layout=({ children })=>{
    return(
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default layout
