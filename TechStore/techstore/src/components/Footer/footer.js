import React,{Component} from "react"
import classes from "./footer.module.css"
class Footer extends Component{
    render(){
        return(
            <div className={classes.Footer}>
                <div>
                    <h4>TechStore</h4>
                    <p>Shop from various categories any time</p>
                    <p>Address: xyz street xyz district xyz</p>
                    <p>Contact: 1234567890</p>
                </div>
                <div>
                    <a>Products</a>
                </div>
                <div>
                    <a>Categories</a>
                </div>
                <a>About Us</a>
            </div>
        )
    }
}
export default Footer