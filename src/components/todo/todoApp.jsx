import React, {Component} from 'react'
import '../counter/counter.css'

class TodoApp extends Component{
    render(){
        return (
            <div>
                <LoginCredidentials/>
            </div>
        );
    }
}
class LoginCredidentials extends Component{
    
    constructor (props){
        super(props);
        this.state ={
            username : '',
            password : ''
        } ;  
    }

        handleChange(event) {
            console.log(event.target.value)

            // this.setState=({username:event.target.value})
            
        //     console.log(event.target.value)
        // this.setState = 
        // (
        //     {
        //     [event.target.name]: event.target.value
        //     })
    }
  

    render(){
        return(
            <div>
                username:<input type="text" name="username" value={this.state.username} onChange={this.handleChange.bind(this)}/><br/>    
                password:<input type="password" name="password" value= {this.state.password} onChange={this.handleChange}/><br/>           
                <button>Login</button>
            </div>
        );
    } 
}

export default TodoApp