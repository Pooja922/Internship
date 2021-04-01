import React from "react";
import Link from "next/link"

const navbar=()=>{
    return(
        <nav>
            <div className="logo">
                <h1>List</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/demo"><a>Demo Listing</a></Link>
        </nav>
    )
}

export default navbar