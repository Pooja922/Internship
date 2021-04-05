import React from "react";
import Link from "next/link"
import Image from "next/image";

const navbar=()=>{
    return(
        <nav>
            <div className="navbar">
                <div className="title">
                    <Image src="/logo.png" height={45} width={100}/>
                </div>
                <div className="link">
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/demo"><a>User Listing</a></Link>
                </div>
            </div>
            <hr/>
        </nav>
    )
}

export default navbar