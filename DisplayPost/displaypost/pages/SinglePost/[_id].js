import Image from "next/image";
import axios from "axios";
import Layout from "../../components/layout";
import classes from "./singlePost.module.css";
import React from "react";

export const getStaticPaths=async()=>{
    let options = {
        headers: {'refresh_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhbGxhdmlAdGVzdC5jb20iLCJ1c2VySWQiOiI2MDdjZmUxZjVjODIzYzA0NDBlOTdmMTciLCJpYXQiOjE2MTk3NzIxNzYsImV4cCI6MTYxOTg1ODU3Nn0.5P7ffnSxWbGRlM5h9ZcZiyKe8y0h9ZBT6wcPjwXofQE'}
    }
    const response = await axios.get(`http://localhost:5000/posts/`,options)
    console.log(response.data.data)
    const paths=response.data.data.map(post=>{
        return {
            params:{_id:post._id.toString()}
        }
    })
    return{
        paths,
        fallback:false
    }
}

export const getStaticProps=async(context)=>{
    let options = {
        headers: {'refresh_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBvb2phQHRlc3QuY29tIiwidXNlcklkIjoiNjA3NDEwZDIwMzNkMzAzMjU4MTlkZmFmIiwiaWF0IjoxNjE5Njc4ODE4LCJleHAiOjE2MTk3NjUyMTh9.0LYkacLuT1AwCw82pHmSUyggXsXYYD7AIb188DaxLdw'}
    }
    const postId=context.params._id;
    const response = await axios.get(`http://localhost:5000/posts/`,options)
    console.log(response.data.data)
    const post=response.data.data.filter(post=>{
        return(post._id===postId)
    })

    return{
        props:{post:post}
    }
}
const Details=({post})=>{
    console.log(post)
    return(
        <Layout>
            <h3 className={classes.heading}>{post[0].postName}</h3>
            <div className={classes.detail}>
                <div className={classes.detailDisplay}>
                    <p><b>Author: </b>{post[0].authorName}</p>
                    <p><b>Post Created At: </b>{post[0].createdAt}</p>
                    <p>{post[0].postContent}</p>
                </div>
                <div className={classes.imageDisplay}>
                    <img alt={post.imageUrl} src={"http://localhost:5000/uploads/"+post[0].imageUrl}/>
                </div>
            </div>
        </Layout>
    )
}
export default Details