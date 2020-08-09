import React,{Component} from 'react';

export default class Logout extends Component {
    
    componentDidMount() {
        localStorage.removeItem('token')
      }
    
      render() {
        return (
          <div>
            <h1>Logout Successful</h1>
          </div>
        );
      }
}