import React,{Component} from 'react';
import classes from "./createPost.module.css";
import styles from "../Login/login.module.css"
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from "react-html-parser";
import Router from "next/router"
import Layout from "../../components/layout";
import {getToken, isAuth} from "../../components/actions/auth";
import {getUserInfo} from "../../components/actions/auth";
import {Alert} from "reactstrap";

const initialState={
    postName:'',
    postContent:'',
    nameError:'',
    categories:[],
    selectedCategoryName:'Sports',
    selectedCategory:[],
    selectedFile:null,
    filename:null,
    message:'',
    visible:true
}

class CreatePost extends Component{

    constructor(props) {
        super(props);
        this.state =initialState
        if(isAuth()){
            this.onClickViewCategories()
        }
    }
    validate=()=>{
        let nameError='';
        if(!this.state.postName){
            nameError="*Post name is required"
        }
        if(nameError) {
            this.setState({
                nameError
            })
            return false
        }
        return true
    }

    options= {
        headers: {"refresh_token": getToken()}
    }
    userInfo=getUserInfo()


    //to view all categories
    onClickViewCategories=()=>{
        axios.get(`http://localhost:5000/category/`,this.options)
            .then(response=>{
                console.log(response)
                this.setState({
                    categories:response.data.data,
                    categoryId:response.data.data.length
                })
            })
            .catch(err=>console.log(err))
    }

    onCategoryNameChanged=(e)=> {
        this.setState({selectedCategoryName: e.target.value});

    }

    postNameChanged=(e)=>{
        this.setState({postName:e.target.value})
    }

    postContentChanged=(e)=>{
        if(e){
            let data=ReactHtmlParser(e);
            data=data[0].props.children[0]
            this.setState({postContent:data})
        }
    }

    onFileChange = e => {
        this.setState({filename:e.target.files[0]})
    };

    onDismiss=()=>{
        this.setState({visible:false})
        if(this.state.message==='success')
            Router.push('/')
        else{
            Router.push('')
        }
    }

    //to create new post
    onCreatePost=(e)=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append("postName",this.state.postName);
        formData.append("authorName",this.userInfo.fullName);
        formData.append("postContent",this.state.postContent);
        formData.append("userId",this.userInfo.userId);
        formData.append("categoryName",this.state.selectedCategoryName)
        formData.append("image",this.state.filename)
        console.log(formData)
        const isValid=this.validate();
        if(isValid){
            const options = {
                headers: {'refresh_token': this.props.token}
            };
            axios.post('http://localhost:5000/posts/ ',formData, options)
                .then(response=>{
                    if(response.data.status===true){
                        {this.setState({message:'success'})}
                        this.setState(initialState)
                        this.setState({filename:null})

                    }
                    else{
                        {this.setState({message:'error'})}
                    }
                })
                .catch(error=>console.log(error))
        }
        else{
            this.setState({message:'warn'})
        }

    }

    render(){
        let display
        if (isAuth()) {
            display = (
                <form onSubmit={this.onCreatePost} encType="multipart/form-data" className={classes.OuterForm}>
                    <div className={classes.postForm}>
                        <div className={classes.detailForm}>
                            <label>Author Name:</label> <input type="text" value={this.userInfo.fullName} disabled/>
                            <input type="text" placeholder="Post Title" value={this.state.postName} onChange={this.postNameChanged}/>
                            <p className="errorMessage">{this.state.nameError}</p>
                            <div>
                                <label htmlFor="file">Choose Post Image</label><br/>
                                <input type="file" name="image" id={this.state.filename} onChange={this.onFileChange} />
                            </div>
                            <label>Category Name:</label>
                            <select value={this.state.selectedCategoryName} onChange={this.onCategoryNameChanged}>
                                {this.state.categories.map(category=>(
                                    <option key={category.categoryId} value={category.categoryName}>{category.categoryName}</option>
                                ))}
                            </select>
                        </div>
                        <div className={classes.contentForm}>
                            <label>Content:</label><br/>
                            <CKEditor
                                editor={ ClassicEditor }
                                data=''
                                onChange={ ( event, editor ) => {
                                    let data = editor.getData();
                                    this.postContentChanged(data)
                                } }
                            />
                        </div>
                    </div>
                    <div  className={classes.FormEnd}>
                        <input type="submit" value="Create Post"/>
                    </div>
                </form>)
        }
        else {
            display = <h3 className={classes.loginMessage}>Please Sign In to create post</h3>
        }
        return(
            <Layout>
                {this.state.message==='success'?<Alert className={styles.alertSuccess} isOpen={this.state.visible} toggle={this.onDismiss}>
                Post Created Successfully
            </Alert>:null}
                {this.state.message==='error'?<Alert className={styles.alertError} isOpen={this.state.visible} toggle={this.onDismiss}>
                    Could not create Post. It already exists
                </Alert>:null}
                {this.state.message==='warn'?<Alert className={styles.alertWarn} isOpen={this.state.visible} toggle={this.onDismiss}>
                    Could not create Post. Please enter valid details
                </Alert>:null}
                {display}
            </Layout>
        )
    }
}
export default CreatePost