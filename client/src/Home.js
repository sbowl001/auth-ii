import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Home = props => {
    const linkStyle = {
        margin: 10
    }
return (
    <div> 
    <Link to="/" style ={linkStyle}> Home </Link>
    <Link to="/register" style ={linkStyle}> Register </Link>
    <Link to= "/login" style ={linkStyle}> Login </Link> 
    <Link to="/users" style ={linkStyle}> Users </Link>
    </div>
)
}

export default Home;
