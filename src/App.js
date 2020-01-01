import React, { Component } from 'react';
import FirstComponent from './components/learning/FirstComponent'
import SecondComponent from './components/learning/SecondComponent'
import ThirdComponent from './components/learning/thirdComponent'
//import Counter from './components/counter/counter'
import TodoApp from './components/todo/todoApp'

import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <TodoApp/>     
      </div>    
    );
  }
}

class LearningComponent extends Component{
  render(){
    return (
      <div className="LearningComponent">
        Hello world
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

export default App;
