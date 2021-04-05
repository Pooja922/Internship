import Head from "next/head";
import Link from "next/link";

export const getStaticProps=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();

    return{
        props:{
            users:data
        }
    }
}

const Demo=({users})=>{
    return(
        <>
            <Head>
                <title>User | User Listing</title>
            </Head>
            <div>
                <h1>All Users</h1>
                {users.map(user=>(
                    <Link href={'/demo/'+user.id} key={user.id}>
                        <a className="single">
                            <h3>{user .name}</h3>
                        </a>
                    </Link>
                    )
                )}
            </div>
        </>

    )
}
export default Demo