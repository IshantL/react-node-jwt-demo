import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

export default function withAuth(componentInside){
 return class extends Component {
    constructor(){
        super();
        this.state={
            loading:true,
            redirect:false
        };
    }
    componentDidMount(){
        fetch('/checktoken')
        .then(res=>{
            if(res.status === 200){
                this.setState({loading:false})
            }
        })
        .catch(err=>{
            console.log(err);
            this.setState({loading:false, redirect:true});
        })
    }


    render(){
        const{loading, redirect} = this.state;
        if(loading){
            return null;
        }
        if(redirect){
            return <Redirect to ="/login"/>
        }
        return <componentInside {...this.props}/>
    }
}
} 