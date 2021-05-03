import React,{Component} from 'react';
import classes from "./viewCategory.module.css";
import styles from "../../styles/Home.module.css"
import axios from "axios";
import {isAuth,getToken} from "../../components/actions/auth";
import Layout from "../../components/layout";

class category extends Component{

    constructor(props) {
        super(props);
        this.onClickViewCategories()
        this.state={
            categories:[]
        }
    }

    options={
        headers:{"refresh_token":getToken()}
    }

    onClickViewCategories=()=>{
        axios.get(`http://localhost:5000/category/`,this.options)
            .then(response=>{
                console.log(response)
                this.setState({
                    categories:response.data.data
                })
            })
            .catch(err=>console.log(err))
    }

    render() {
        let display
        if(isAuth()){
            display=(
                <div className={classes.OuterCard}>
                    {this.state.categories.map(category=>(
                        <div key={category._id} className={classes.InnerCard}>
                            <p><strong>Category Name:</strong> {category.categoryName}</p>
                            <p><strong>Category Id:</strong> {category.categoryId}</p>
                            <p><strong>Created by:</strong> {category.authorName}</p>
                            <p><strong>Category created at:</strong> {category.createdAt}</p>
                        </div>
                    ))}
                </div>
            )
        }
        else {
            display = <h3 className={styles.loginMessage}>Please Sign In to view post</h3>
        }
        return (
            <Layout>
                {display}
            </Layout>
        )
    }
}
export default category