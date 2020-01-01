import React, {Component} from "react";
import './counter.css'

class CounterButton extends Component {
  //constructor to initialize the state or the counter
  constructor(){
    super();
    // this.state = {
    //   counter : 0
    // }
    // this.increment = this.increment.bind(this)
  }
  render(){
         return(
      <div className="counter">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
      </div>
    );
    }
    //the method has to update the counter
    //   increment = () => {
    //   this.setState(
    //     {
    //       counter : this.state.counter + this.props.by
    //     }
    //   );
    //   this.props.incrementMethod(this.props.by)
    // }

    //   decrement = () => {
    //     this.setState({
    //       counter: this.state.counter - this.props.by
    //     });
    //     this.props.decrementMethod(this.props.by)
    //   }
  }


export default CounterButton;