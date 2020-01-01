import React, {Component} from 'react'
import CounterButton from './CounterButton.jsx'
import './counter.css'
class Counter extends Component{
    //initializing the state of the counter and it is done through a constructor

    constructor (){
        super();
        this.state = {
            counter : 0
        }
        
    }

    render(){
        return(
        <div className="counter">
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <div className="count">
        <span>{this.state.counter}</span>
        </div>
        <div>
          <button className="reset" onClick={this.reset}>Reset</button>
        </div>
      </div>
        );
    }
    //update the state after counting

    increment = (by) => {
        this.setState(
            (prevState) => {
                return {
                    counter: prevState.counter + by
                }
            }
            
        )
    }

     decrement = (by) => {
         this.setState(
             (prevState) => {
                 return {
                     counter: prevState.counter - by
                 }
             }

         )
     }
     reset = () => {
         this.setState({
             counter : 0 
         })
     }
}

export default Counter;