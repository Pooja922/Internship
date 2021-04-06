import React from "react"
import Link from "next/link";

import classes from "./header.module.css"

const header=()=>{
    return(
        <div className={classes.Header}>
            <div className={classes.Toolbar}>
                <h3>BooksPedia</h3>
                <div className={classes.Link}>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/Books/books"><a>Books</a></Link>
                    <Link href="/About/about"><a>About</a></Link>
                </div>
            </div>
        </div>
    )
}
export default header