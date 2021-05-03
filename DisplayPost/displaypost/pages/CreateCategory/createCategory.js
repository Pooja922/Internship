import React,{Component} from "react";
import { Alert } from 'reactstrap';
import axios from "axios";
import Router from "next/router"
import {isAuth,getUserInfo,getToken} from "../../components/actions/auth";
import classes from "../Login/login.module.css";
import styles from "../../styles/Home.module.css"
import Layout from "../../components/layout";

const initialState={
    categoryName:'',
    nameError:''
}

class CreateCategory extends Component{
    constructor(props) {
        super(props);
        this.state = {initialState,message:'',visible:true}

    }
    userInfo=getUserInfo()

    onDismiss=()=>{
        this.setState({visible:false})
        if(this.state.message==='success')
            Router.push('/')
        else{
            Router.push('/CreateCategory/createCategory')
        }
    }

    validate=()=>{
        let nameError='';
        if(!this.state.categoryName){
            nameError="*Category name is required"
        }
        if(nameError) {
            this.setState({
                nameError
            })
            return false
        }
        return true
    }

    onChangeCategoryName=(e)=>{
        e.preventDefault()
        this.setState({categoryName:e.target.value})
    }

    //on creating category
    onCreateCategory=(e)=>{
        e.preventDefault()
        const categoryData={
            categoryName: this.state.categoryName,
            authorName: this.userInfo.fullName,
            categoryId: Math.random(),
            userId:this.userInfo.userId
        }
        const isValid=this.validate()
        if(isValid){
            const options = {
                headers: {'refresh_token': getToken()}
            };
            axios.post('http://localhost:5000/category',categoryData, options)
                .then(response=>{
                    if(response.data.status===true){
                        this.setState(initialState)
                        this.setState({message:'success'})
                    }
                    else{
                        this.setState({message:'error'})
                    }
                })
        }
        else{
            this.setState({message:'warn'})
        }
    }

    render(){
        let display
        if(isAuth()){
            display=<div>
                <form className={classes.Form}>
                    <input name="categoryName" type="text" placeholder="Category Name" value={this.state.categoryName} onChange={this.onChangeCategoryName}/>
                    <p className="errorMessage">{this.state.nameError}</p>
                    <label>Author Name:</label><input type="text" value={this.userInfo.fullName} disabled/>
                    <button className={classes.SubmitButton} onClick={this.onCreateCategory}>Submit</button>
                </form>
            </div>
        }
        else {
            display = <h3 className={styles.loginMessage}>Please Sign In to create category</h3>
        }
        return(
            <Layout>
                {this.state.message==='success'?<Alert className={classes.alertSuccess} isOpen={this.state.visible} toggle={this.onDismiss}>
                    Category Created Successfully
                </Alert>:null}
                {this.state.message==='error'?<Alert className={classes.alertError} isOpen={this.state.visible} toggle={this.onDismiss}>
                    Could not Create Category. Category already exists
                </Alert>:null}
                {this.state.message==='warn'?<Alert className={classes.alertWarn} isOpen={this.state.visible} toggle={this.onDismiss}>
                    Could not create category. Please enter valid details
                </Alert>:null}
                {display}
            </Layout>
        )
    }
}
export default CreateCategory