import classes from "./footer.module.css"
import Link from "next/link";
const footer=()=>{
    return(
        <div className={classes.Footer}>
            <p>Copyright @BooksPedia</p>
            <div className={classes.Link}>
                <Link href="/"><a>Home</a></Link>
                <Link href="/Books/books"><a>Books</a></Link>
                <Link href="/About/about"><a>About</a></Link>
            </div>
        </div>
    )
}
export default footer