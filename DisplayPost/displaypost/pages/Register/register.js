import React, { Component } from 'react';
import classes from "./register.module.css";
import styles from "../Login/login.module.css";
import Link from "next/link";
import Layout from "../../components/layout";
import axios from "axios";
import Router from "next/router";
import {Alert} from "reactstrap";

class Register extends Component{
    state={
        fullName:'',
        phoneNumber:null,
        email: '',
        password: '',
        errors:{
            emailError: '',
            passwordError: '',
            nameError: '',
            phoneNumberError: ''
        },
        message:'',
        visible:true
    }

    onDismiss=()=>{
        this.setState({visible:false,message:''})
        if(this.state.message==='success')
            Router.push('/Login/login')
        if(this.state.message==='warn')
            Router.replace('/Register/register')
    }

    validate=()=>{
        let emailError='';
        let passwordError='';
        let nameError='';
        let phoneNumberError='';
        if(!(this.state.email && this.state.email.includes('@'&&'.com'))){
            emailError="*Invalid Email"
        }
        if(!this.state.fullName){
            nameError="*Name is Required"
        }
        if(!this.state.phoneNumber){
            phoneNumberError='*Invalid Phone Number'
        }
        if(!this.state.password){
                passwordError="*Password is Required"
        }
        if(emailError||passwordError||nameError||phoneNumberError){
            this.setState({errors:{
                emailError,
                    passwordError,
                    nameError,
                    phoneNumberError
                }
            })
            return false
        }
        return true
    }
    displayAlert=()=>{
        return(
            <>
                {this.state.message==='success'?<Alert className={styles.alertSuccess} isOpen={this.state.visible} toggle={this.onDismiss}>
                    Registration Successful
                </Alert>:null}
                {this.state.message==='error'?<Alert className={styles.alertError} isOpen={this.state.visible} toggle={this.onDismiss}>
                    Registration Unsuccessful. User already exists
                </Alert>:null}
                {this.state.message==='warn'?<Alert className={styles.alertWarn} isOpen={this.state.visible} toggle={this.onDismiss}>
                    Registration Unsuccessful. Please enter valid details
                </Alert>:null}
            </>

        )

    }

    inputChange=(id)=>e=>{
        switch(id){
            case 'Full Name':
                this.setState({fullName:e.target.value})
                break
            case 'Phone Number':
                this.setState({phoneNumber:e.target.value})
                break
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

    submitRegisterForm=(e)=>{
        e.preventDefault()
        const userData={
            fullName: this.state.fullName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            password: this.state.password
        }
        const isValid=this.validate()
        if(isValid) {
            axios.post(`http://localhost:5000/users/`, userData)
                .then(response => {
                    console.log(response)
                    if (response.data.message === "ALL OK!!") {
                        this.setState({message:'success'})
                        this.displayAlert()
                        this.setState({
                            fullName: '',
                            phoneNumber: null,
                            email: '',
                            password: ''
                        })
                    } else {
                        this.setState({message:'error'})
                    }
                })
                .catch(err => alert(err))
        }
        else{
           this.setState({message:'warn'})
        }
    }

    render(){
        return(
            <Layout>
                <form className={styles.Form}>
                    <div className={classes.OuterForm}>
                        <div className={classes.inputs}>
                            <input type="text" placeholder="Full Name" onChange={this.inputChange('Full Name')}/>
                            <p className="errorMessage">{this.state.errors.nameError}</p>
                            <input type="text" placeholder="Phone Number" onChange={this.inputChange('Phone Number')}/>
                            <p className="errorMessage">{this.state.errors.phoneNumberError}</p>
                        </div>
                        <div className={classes.inputs}>
                            <input type="text" placeholder="Email" onChange={this.inputChange('email')}/>
                            <p className="errorMessage">{this.state.errors.emailError}</p>
                            <input type="password" placeholder="Password" onChange={this.inputChange('password')}/>
                            <p className="errorMessage">{this.state.errors.passwordError}</p>
                        </div>
                    </div>
                    <button className={styles.SubmitButton} onClick={this.submitRegisterForm}>Register</button>
                    <Link href="/Login/login"><a>Go to LOGIN</a></Link>
                </form>
            </Layout>
        )
    }
}
export default Register