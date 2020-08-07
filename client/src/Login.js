import React,{Component} from 'react';

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        };
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>
                <input type="email" placeholder="enter email" value={this.state.email} ></input>
                <input type="password" placeholder="enter password" value={this.state.password} ></input>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}