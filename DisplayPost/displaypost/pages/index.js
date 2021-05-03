import Layout from "../components/layout";
import classes from "../styles/Home.module.css";
import React, {Component} from "react";
import Link from "next/link";
import axios from "axios";
import {getToken,isAuth} from "../components/actions/auth";

const initialState={
    posts:[]
}
class Home extends Component{
    constructor(props) {
        super(props);
        this.state=initialState
        if(isAuth()){
            this.onClickViewPosts()
        }

    }

    options ={
        headers: {'refresh_token': getToken()}
    }

    onClickViewPosts=()=>{

        /*axios.get(`http://localhost:5000/posts/getUserPost/${this.props.userId}`,options)
            .then(response=>{
                console.log(response)
                this.setState({posts:response.data.data,showPosts:true})
            })*/
        axios.get(`http://localhost:5000/posts/`,this.options)
            .then(response=>{
                this.setState({
                    posts:response.data.data,
                })
            })
    }

    render(){
        let display
        if(isAuth()){
            display=(
                <div className={classes.OuterCard}>
                    {this.state.posts.map((post)=>(
                        <Link href={'/SinglePost/'+post._id} key={post._id}>
                            <div className={classes.InnerCard}>
                                <h5><strong>{post.postName}</strong></h5>
                                <p><strong>Category: </strong>{post.categoryName}</p>
                                <img className={classes.PostImage} alt={post.imageUrl} src={"http://localhost:5000/uploads/"+post.imageUrl}/>
                                <p><strong>Posted By: </strong>{post.authorName}</p>
                                {/*<Link className={classes.PostLink} to="/singlePostClicked" onClick={()=>this.props.onSinglePostClicked(post._id)}>
                                Check Post
                            </Link>*/}
                            </div>
                        </Link>
                    ))}
                </div>
            )
        }
        else {
            display = <h3 className={classes.loginMessage}>Please Sign In to view posts</h3>
        }
        return(
            <Layout>
                {display}
            </Layout>
        )
    }

}
export default Home