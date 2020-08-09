import React,{Component} from 'react';

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        };
    }

    handleInputChange =(e)=>{
        const {value,name}= e.target;
        this.setState({
            [name]:value
        });
    }

    onSubmit =(e)=>{
        e.preventDefault();
        fetch('/server/auth',{
            method:'POST',
            body: JSON.stringify(this.state),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>console.log(res.status));
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>
                <input type="email" name="email" placeholder="enter email" value={this.state.email} onChange={this.handleInputChange}></input>
                <input type="password"  name="password" placeholder="enter password" value={this.state.password} onChange={this.handleInputChange}></input>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}