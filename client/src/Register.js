import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    state = {
        username: '',
        race: '',
        password: ''
    }

    inputChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5500/api/auth/register', this.state)
        .then(user =>{
            console.log(user)
        })
        .catch( err => console.log(err))
    }
    render(){
        return(
            <div style= {{marginTop: 20}}>
            <div>
                Register
            </div>
            <form onSubmit = {this.submitHandler}>
            <input name ="username" placeholder="Username" value={this.state.username} onChange={this.inputChange}/>
            <input name="race" placeholder="Race" value={this.state.race} onChange={this.inputChange}/>
            <input name="password" placeholder="Password" value={this.state.password} onChange={this.inputChange}/>
            <button type="submit"> Submit </button>
            </form>
            </div>
        )
    }
}