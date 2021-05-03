import React,{Component } from 'react';
import Link from "next/link";
import axios from "axios";
import {authenticate, getToken} from "../../components/actions/auth";
import Router from "next/router";

import classes from "./login.module.css";
import Layout from "../../components/layout";
import {Alert} from "reactstrap";

class Login extends Component{
    state={
        email:'',
        password:'',
        errors:{
            emailError: '',
            passwordError: ''
        },
        message:'',
        visible:true
    }

    onDismiss=()=>{
        this.setState({visible:false})
        if(this.state.message==='success')
            Router.push('/')
        else{
            Router.push('')
        }
    }

    validate=()=>{
        let emailError='';
        let passwordError='';
        if(!(this.state.email && this.state.email.includes('@'&&'.com'))){
                emailError="*Invalid Email"
        }
        if(!this.state.password){
            passwordError="*Password is Required"
        }
        if(emailError||passwordError){
                this.setState({errors:{
                        emailError,
                        passwordError
                    }
                })
                return false
            }
            return true
    }

    inputChange=(id)=>e=>{
        switch(id){
            case 'email':
                this.setState({email:e.target.value})
                break;
            case 'password':
                this.setState({password:e.target.value})
                break;
            default:
                return 0
        }
    }

    submitLoginForm=(e)=>{
        e.preventDefault()
        const userData={
            email:this.state.email,
            password: this.state.password
        }
        const isValid=this.validate()
        if(isValid) {
            axios.post(`http://localhost:5000/users/login`, userData)
                .then(response => {
                    if (response.data.message === "success") {
                        console.log(response)
                        const data = {
                            token: response.data.data,
                            email: response.data.email,
                            fullName: response.data.fullName,
                            userId: response.data.userId
                        }
                        authenticate(data, () => {})
                        this.setState({
                            email: '',
                            password: ''
                        })
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
        return(
            <Layout>
                {this.state.message==='success'?<Alert className={classes.alertSuccess} isOpen={this.state.visible} toggle={this.onDismiss}>
                    Login Successful
                </Alert>:null}
                {this.state.message==='error'?<Alert className={classes.alertError} isOpen={this.state.visible} toggle={this.onDismiss}>
                    Invalid username or password
                </Alert>:null}
                {this.state.message==='warn'?<Alert className={classes.alertWarn} isOpen={this.state.visible} toggle={this.onDismiss}>
                   Login Unsuccessful. Please enter valid details
                </Alert>:null}
                <form className={classes.Form}>
                    <input name="email" placeholder="Email" type="text" value={this.state.email} onChange={this.inputChange('email')}/>
                    <p className="errorMessage">{this.state.errors.emailError}</p>
                    <input name="password" placeholder="Password" type="password" value={this.state.password} onChange={this.inputChange('password')}/>
                    <p className="errorMessage">{this.state.errors.passwordError}</p>
                    <button className={classes.SubmitButton} onClick={this.submitLoginForm}>Login</button>
                    <Link href="/Register/register"><a>SignUp?</a></Link>
                </form>
            </Layout>
        )
    }
}
export default Login