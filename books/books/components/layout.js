import Header from "./header"
import Footer from "./footer"

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