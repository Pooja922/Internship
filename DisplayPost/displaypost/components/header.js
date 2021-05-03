import React, { Component } from 'react';
import classes from "./header.module.css"
import Link from "next/link";
import Router from "next/router"
import {getToken, isAuth, logout} from "../components/actions/auth"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import axios from "axios";

class Header extends Component{
    state={
        isOpen:false,
        categories:'',
        categoryId:''
    }

    toggle = () => {
        this.setState({isOpen:true})
    };

    render(){
        return (
            <div>
                <Navbar className={classes.Navbar} expand="md">
                    <Link href="/" >
                        <h4>BloggerSite</h4>
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link href="/CreatePost/createPost">
                                    <NavLink className={classes.Links}>Create Post</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/CreateCategory/createCategory">
                                    <NavLink className={classes.Links}>Create Category</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/ViewCategory/viewCategory">
                                    <NavLink className={classes.Links}>View Category</NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                        {!isAuth() && <Link href="/Login/login">
                            <NavLink>Login</NavLink>
                        </Link>}
                        {isAuth() &&
                            <Link href="/Login/login">
                                <NavLink onClick={()=>logout(()=>Router.replace('/Login/login'))}>Logout</NavLink>
                            </Link>}

                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default Header;