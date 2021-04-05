import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";                                      //to Redirect the user

const notFound=()=>{

    const router=useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    },[])

    return(
        <div className="main">
            <h3>OOps Page Not Found!!</h3>
            <Link href="/"><a>Go to HomePage</a></Link>
        </div>
    )
}
export default notFound