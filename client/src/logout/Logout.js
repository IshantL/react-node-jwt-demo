import React,{Component} from 'react';

export default class Logout extends Component {

  constructor(){
    super();
    this.state = { message:""};
  }
    
    componentDidMount() {   
        let message ="";
        if(localStorage.getItem('token')){
          message = "Logout Successful";
          localStorage.removeItem('token')
        }else{
          message = "Please login."
        }
        this.setState({message:message});
      }
        
      
    
      render() {
        return (
          <div>
            <h1>{this.state.message}</h1>
          </div>
        );
      }
}