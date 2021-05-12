import React,{Component} from 'react';

import classes from './header.module.css';

class Header extends Component{
    render() {
        return (
                <div className={classes.Header1}>
                    <h2>TechStore</h2>
                    <div className={classes.Link1}>
                        <a href="/">Home</a>
                        <a href="/">Products</a>
                        <a href="/">Login</a>
                    </div>
                </div>
        )
    }
}

export default Header