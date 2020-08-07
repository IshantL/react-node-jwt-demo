import React,{Component} from 'react';

export default class Home extends Component {
    constructor(){
        super();
        this.state ={
            message:'loading...'
        }
    }

    componentDidMount(){
        fetch('/server/home')
        .then( res => console.log(res));
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}


