import Navbar from "../components/navbar"
import Footer from "../components/footer"

const layout=({ children })=>{
    return(
        <div className="content">
          <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default layout